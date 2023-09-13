import { NextRequest, NextResponse } from "next/server";
import { db } from "@/database";
import { Product } from "@/models";
import { IProduct } from "@/interfaces/products";
import { type } from "os";

type Data = { message: string } | IProduct;

type Kcategory = { params: { slug: string } };

export async function GET(
  req: NextRequest,
  { params }: Kcategory,
  res: NextResponse<Data>
) {
  // console.log(params);

  const { slug } = params;

  // console.log(slug);

  await db.connect();
  const product = await Product.findOne({ slug })
    .sort({ category: 1 })
    .select("category personage images price inStock slug -_id")
    .lean();

  await db.disconnect();

  if (!product) {
    return NextResponse.json({
      message: "Producto Desencontrado",
    });
  }

  return NextResponse.json(product);
  //  return NextResponse.json({ message: `Conectado con categoria ${cat} FbHd`, });
}
