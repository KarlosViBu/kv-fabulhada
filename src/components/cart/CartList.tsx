"use client"
import { FC } from 'react';
import NextLink from 'next/link';
// import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';

// import { ItemCounter } from '../ui';
// import { CartContext } from '@/context';
// import { ICartProduct, IOrderItem } from '@/interfaces';
import { currency } from '@/utils';
import { initialData } from '@/database/seed-data';
import Link from 'next/link';
import Image from 'next/image';

const productsInCart = [
   initialData.products[0],
   initialData.products[1],
   initialData.products[2],
]

interface Props {
   editable?: boolean;
   // products?: IOrderItem[];
}

export const CartList: FC<Props> = ({ editable = false }) => {
// export const CartList= () => {

   // En el context estan todos los productos del carrito
   // const { cart, updateCartQuantity, removeCartProduct } = useContext(CartContext);

   // const onNewCartQuantityValue = (product: ICartProduct, newQuantityValue: number) => {
   //    product.quantity = newQuantityValue;
   //    updateCartQuantity(product);
   // }

   // const productsToShow = products ? products : cart;

   return (
      <>
         {
            productsInCart.map(product => (
               // <Grid container spacing={2} key={product.slug + product.kind} sx={{ mb: 1 }}>
               <div key={product.slug + product.kind}
                  className="grid grid-cols-4 gap-y-10 gap-x-1 md:px-4">
                  {/* TODO: llevar a la página del producto */}
                  {/* <Link href={`/shop/product/${product.slug}`} passHref legacyBehavior> */}
                  <Link href="" passHref legacyBehavior
                     className='bg-red-100'
                  >
                     <Image src={`/products/${product.images[0]}`} width={300} height={200} alt='personage'
                        className='rounded-md shadow-md md:rounded-xl p-1 md:p-1 bg-sky-200'
                     />
                     {/* <img src="/products/afrodita.png" alt="personaje"
                        className=" h-40 rounded-xl"
                     /> */}
                  </Link>

                  <div className="col-span-2 py-3 px-1">
                     <div className="md:text-2xl "> {product.personage} </div>
                     {
                        editable
                        ? (
                           <div className="text-start p-2"> - 1 + </div>

                        )
                        : (
                           <div className='mt-2 text-xs md:text-xl'>2 Productos  </div>
                        )

                     }
                     
                  </div>

                  <div className="p-3 ">
                     <div className="text-end md:text-2xl">{currency.format(product.price)}</div>
                     {
                        editable
                        ?(

                           <div className="text-end text-sm md:text-lg mt-2"> Remover </div>
                        )
                        :
                        ( "")
                     }
                  </div>

               </div>
            ))
         }
      </>
   )
}
