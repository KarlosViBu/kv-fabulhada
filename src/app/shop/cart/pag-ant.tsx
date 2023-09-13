import { useContext, useEffect } from 'react';
// import { div, button, div, div, Divider, div, div } from '@mui/material';

// import { CartContext } from '@/context';
import { ShopLayout } from '../ShopLayout';
import { CartList, OrderSummary } from '@/components/cart';
import { useRouter } from 'next/router';
import { arya } from '@/components/ui';

const CartPage = () => {
   // const { isLoaded, cart } = useContext(CartContext);
   // const router = useRouter();

   // useEffect(() => {
   //    if (isLoaded && cart.length === 0) {
   //       router.replace('/cart/empty');
   //    }
   // }, [isLoaded, cart, router])

   // if (!isLoaded || cart.length === 0) {
   //    return (<></>);
   // }

   return (
      <ShopLayout title='Carrito' pageDescription={'Carrito de compras de la tienda'}>
         <h1 className='titulo text-slate-100 m-3 md:mx-10'>Carrito</h1>
         <section className="grid grid-cols-1 gap-y-2 lg:m-5 md:grid-cols-8 ">
            
          <div
            className= {`${arya.className} col-span-5 order-last  grid   md:grid-cols-3 grid-rows-3 gap-2
              p-2 shadow-xl lg:py-4 lg:px-4 sm:col-start-6`}
          >
            <div className='kbox md:col-span-3 grid grid-cols-3 p-5 gap-3  md:gap-10 md:-mt-4'>
            
            <div className="titulo col-span-3  border-gray-400 border-b-2"> Orden </div>
            {/* <span className='border-gray-400 border-2 col-span-3 h-1'></span> */}
            <div className="titulo "> Total </div>
            <div className="titulo col-span-2 text-end"> $70,000 </div>

            <div
              className="col-span-3 text-center text-lg font-bold px-14
                   md:px-3 md:text-xl  lg:px-14 "
            >
              <a
                className="boton"
                href="/shop/checkout"
              >
                <span
                  className="block rounded-full bg-white bg-opacity-80 px-8 py-2 
                      hover:bg-transparent text-xl md:text-3xl"
                >
                  Continuar
                </span>
              </a>
            </div>
            </div>
          </div>

          <div className='kbox px-1 py-2 mx-2 grid gap-y-4 md:col-span-5 sm:col-start-1 sm:row-start-1'>
            <CartList editable />

          </div>
        </section>
         


      </ShopLayout>
   )
}

export default CartPage;