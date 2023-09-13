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
      <h1 className='titulo text-slate-100 m-3 mb-4 md:mx-10'>Carrito</h1>
      <section className='flex flex-col gap-5 lg:flex-row lg:justify-between my-2'>

        <div className='kbox kborder px-2 py-2 md:mx-2 md:py-4 grid gap-y-4 lg:w-[62%]'>
          <CartList editable />

        </div>

        <div
          className={`${arya.className} lg:w-[38%]  grid-rows-3 gap-2`}
        >
          <div className='kbox kborder p-5 gap-3  lg:-mt-1'>

            <div className="titulo"> Resumen </div>
            <span className='kline'></span>

            <div className='flex justify-between mt-2'>
              <div className="titulo "> Total </div>
              <div className="titulo col-span-2 text-end"> $70,000 </div>
            </div>

          </div>
          <div
            className="text-center md:px-48 px-24
                    md:text-xl lg:px-24 "
          >
            <a
              className=""
              href="/shop/checkout"
            >
              <span
                className="block kbordes text-green-200  hover:text-white
                 px-8 py-2 mt-5 md:mt-8 md:py-3 md:text-3xl"
              >
                Continuar
              </span>
            </a>
          </div>

        </div>


      </section>



    </ShopLayout>
  )
}

export default CartPage;