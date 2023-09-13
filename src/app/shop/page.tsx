import Image from "next/image";
import { ProductList } from "@/components/products";
import { FullScreenLoading } from "@/components/ui";
import { useProducts } from "@/hooks";
import { initialData } from "@/database/seed-data";
import { ShopLayout } from "./ShopLayout";
import { arya } from "@/components/ui";


export default function Shop() {
  


  // const { products, isLoading } = useProducts('/products');

  return (
    <ShopLayout title={'Fabul♥Hada - Tienda'} pageDescription={'Encuentra los mejores productos de FabulHada aquí'}>
        <h1 className="text-slate-100 mb-2 titulo">Tienda</h1>
        <h2 className="text-slate-100 mb-2 subtitulo">Todos los productos</h2>
        {/* {
          isLoading
            ? <FullScreenLoading />
          }
         */}
        <ProductList products={ initialData.products as any } />

    </ShopLayout>
  )
}
