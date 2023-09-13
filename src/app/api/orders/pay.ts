import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';
// import { OrderResponseBody } from "@paypal/paypal-js"
import { IPaypal } from '@/interfaces';
import { db } from '@/database';
import { Order } from '@/models';
import Cookies from 'js-cookie';



type Data = {
    message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    
    switch( req.method) {
        case 'POST':
            return payOrder(req, res);

        default:
            return res.status(400).json({ message: 'Bad request' })

    }   
}


const getPaypalBearerToken = async():Promise<string|null> => {
    
    const PAYPAL_CLIENT = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
    const PAYPAL_SECRET = process.env.PAYPAL_SECRET;

    const base64Token = Buffer.from(`${ PAYPAL_CLIENT }:${ PAYPAL_SECRET }`, 'utf-8').toString('base64');
    const body = new URLSearchParams('grant_type=client_credentials');


    try {
        
        const { data} = await axios.post( process.env.PAYPAL_OAUTH_URL || '', body, {
            headers: {
                'Authorization': `Basic ${ base64Token }`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        return data.access_token;


    } catch (error) {
        if ( axios.isAxiosError(error) ) {
            console.log(error.response?.data);
        } else {
            console.log(error);
        }

        return null;
    }


}


const payOrder = async(req: NextApiRequest, res: NextApiResponse<Data>) => {

    // Todo: validar sesión del usuario
    // TODO: validar mongoID

    
    const paypalBearerToken = await getPaypalBearerToken();
    
    if ( !paypalBearerToken ) {
        return res.status(400).json({ message: 'Fallo al confirmar el token de paypal' })
    }
    
    const { transactionId = '', orderId = ''  } = req.body;
    
    
    const { data } = await axios.get<IPaypal.PaypalOrderStatusResponse>( `${ process.env.PAYPAL_ORDERS_URL }/${ transactionId }`, {
        headers: {
            'Authorization': `Bearer ${ paypalBearerToken }`
        }
    });
    
    if ( data.status !== 'COMPLETED' ) {
        return res.status(401).json({ message: 'Orden Desconocida' });
    }
    
    
    await db.connect();
    const dbOrder = await Order.findById(orderId);
    
    if ( !dbOrder ) {
        await db.disconnect();
        return res.status(400).json({ message: 'Orden Inexistente en nuestra base de datos' });
    }
    
    
    if ( dbOrder.total !== Number(data.purchase_units[0].amount.value) ) {
        await db.disconnect();
        return res.status(400).json({ message: 'Los montos de PayPal y nuestra orden son diferentes' });
    }
    
    
    dbOrder.transactionId = transactionId;
    dbOrder.isPaid = true;
    await dbOrder.save();
    await db.disconnect();

    Cookies.set("ordenid",transactionId,{expires: 2 });
    console.log({transactionId});
    
    return res.status(200).json({ message: 'Orden pagada' });
}
