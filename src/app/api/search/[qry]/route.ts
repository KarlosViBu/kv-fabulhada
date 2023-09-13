import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/database'
import { Product } from '@/models'
import { IProduct } from '@/interfaces/products';
// import { type } from 'os';

type Data = 
| { message: string }
| IProduct[]

type Kqry = { params: { qry:string } }

export async function GET(req: NextRequest, { params }: Kqry ,res: NextResponse<Data>) {

   // console.log(params);

   let { qry } = params

   // console.log(qry);

   if ( qry.length === 0 ) {
      return NextResponse.json({ message: `Debe especificar la búsqueda mijito`, });
   }

   qry = qry.toString().toLowerCase();
      
    await db.connect();
    
    const products = await Product.find({
                                 $text: { $search: qry }
                                 })
                                .sort({qry:1})
                                .select('category personage images price inStock slug -_id')
                                .lean();

    await db.disconnect();
   return NextResponse.json(products)
//   return NextResponse.json({ message: `Buscando por ${qry} FbHd`, });

}
