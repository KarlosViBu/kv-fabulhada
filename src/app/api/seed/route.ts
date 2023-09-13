import { NextRequest, NextResponse } from 'next/server'
import { db, seedDatabase } from '@/database';
// import { Product, User } from '@/models';

type Data = { message: string }

export async function GET(req: NextRequest, res: NextResponse<Data>) {

    if (  process.env.NODE_ENV === 'production'){
        return NextResponse.json({ message: 'No tiene acceso a este API'});
    }

    await db.connect();

    // await User.deleteMany();
    // await User.insertMany( seedDatabase.initialData.users );

    // await Product.deleteMany();
    // await Product.insertMany( seedDatabase.initialData.products );
    await db.disconnect();

    return NextResponse.json({ message: 'Proceso realizado correctamente', });
}