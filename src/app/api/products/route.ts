import { NextRequest, NextResponse } from "next/server";
import { db } from "@/database";
import { Product } from "@/models";
import { IProduct } from "@/interfaces/products";

type Data = { message: string } | IProduct[];

export async function GET(req: NextRequest, res: NextResponse<Data>) {
  await db.connect();
  const products = await Product.find()
    .sort({ category: 1 })
    .select("personage category images price inStock slug -_id")
    .lean();

  await db.disconnect();

  if (!products) {
    return NextResponse.json({
      message: "Productos Desencontrado",
    });
  }

  return NextResponse.json(products);
  // return NextResponse.json({ message: 'Conectado correctamente FbHd', });
}
