"use client"
// import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import NextLink from 'next/link';
// import { GetServerSideProps } from 'next'
// import { getToken } from 'next-auth/jwt';

// import { CartContext } from '@/context';
// import { CartList, OrderSummary } from '@/components/cart';
import { countries } from '@/utils';
import { ShopLayout } from '../../ShopLayout';
import { arya } from '@/components/ui';
import { CartList } from '@/components/cart';
// import { Link } from '../../../../interfaces/paypal';
import Link from 'next/link';


export default function SummaryPage() {

   // const { shippingAddress, numberOfItems, createOrder } = useContext(CartContext);
   // console.log(shippingAddress);
   // if (!shippingAddress) {
   // return <></>;
   // }

   // const router = useRouter();
   // const [isPosting, setIsPosting] = useState(false);
   // const [errorMessage, setErrorMessage] = useState('');

   // const onCreateOrder = async () => {
   //    setIsPosting(true);  //empieza el proceso, bloqueo boton

   //    const { hasError, message } = await createOrder();

   //    if (hasError) {
   //       setIsPosting(false);
   //       setErrorMessage(message);
   //       return;
   //    }

   //    // dependiendo del resultado navego
   //    router.replace(`/orders/${message}`);

   // }

   // const { firstName, lastName, address, address2 = '', city, country = 'Colombia', phone, zip ='10101' } = shippingAddress;

   return (
      <ShopLayout title='Resumen de orden' pageDescription={'Resumen de la orden'}>
         <h1 className='titulo text-slate-100 m-3 md:y-5 md:mx-8'>Resumen de la orden</h1>
         <section className='flex flex-col lg:flex-row lg:justify-between my-2 lg:mt-8'>

            <div className='kbox kborder px-2 py-2  md:px-0 md:mx-2 md:py-4 grid gap-y-4 lg:w-[62%]'>
               <CartList />

            </div>

            <div
               className={`${arya.className} grid-rows-3 gap-2 lg:w-[38%]
              p-2 lg:py-4 lg:px-4 `}
            >
               <div className='kbox kborder p-5 gap-3  lg:-mt-5 '>

                  <div className='flex flex-col'>
                     <div className='flex justify-between'>
                        <div className="titulo"> Resumen </div>
                        <span className='mt-2'>2 productos</span>
                     </div>
                     <span className='kline'></span>
                     <div className='flex justify-between'>
                        <h2 className='subtitulo'>Dirección de Entrega</h2>
                        <Link href='/shop/checkout/address'
                           className='mt-2'
                        >Editar</Link>
                     </div>
                     <p>Carlos Villegas</p>
                     <p>423 Winthrop st, piso 2 </p>
                     <p>Winthrop, 02152</p>
                     <p>Colombia</p>
                     <p>+1 8573919536</p>
                     <span className='kline'></span>
                  </div>
                  <div className='flex justify-between mt-2'>
                     <div className="titulo "> Total </div>
                     <div className="titulo col-span-2 text-end"> $70,000 </div>
                  </div>

               </div>
               <div
                  className="text-center md:px-48 px-20
                  md:text-xl lg:px-20 "
               >
                  <Link
                     className=""
                     href="/shop/checkout"
                  >
                     <span
                        className="block kbordes text-green-200  hover:text-white
                         px-8 py-2 mt-5 md:mt-8 md:py-3 md:text-3xl"
                     >
                        Confirmar Orden
                     </span>
                  </Link>
               </div>

            </div>


         </section>

      </ShopLayout>
   )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {

//    const session: any = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
//    // console.log({session});

//    if ( session ) {
//        return { props: {} }
//    }
//    else {
//        return {
//            redirect: {
//                destination: '/auth/login?p=/checkout/address',
//                permanent: false
//            }
//        }
//    }

// }

// export default SummaryPage;