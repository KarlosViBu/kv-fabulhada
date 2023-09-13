import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/database'
import { Product } from '@/models'
import { IProduct } from '@/interfaces/products';

type Data = 
| { message: string }
| IProduct[]

type Kcategory = { params: { category:string } }

export async function GET(req: NextRequest, { params }: Kcategory ,res: NextResponse<Data>) {

   // console.log(params);

   const { category } = params

   // console.log(category);
      
    await db.connect();
    const products = await Product.find({category: category})
                                .sort({category:1})
                                .select('category personage images price inStock slug -_id')
                                .lean();

    await db.disconnect();
    return NextResponse.json(products)
   //  return NextResponse.json({ message: `Conectado con categoria ${cat} FbHd`, });

}
