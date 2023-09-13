"use client"
import { initialData } from '@/database/seed-data';
import { useParams } from 'next/navigation'
import { ItemCounter, arya } from '@/components/ui';
import { currency } from '@/utils';
import { ProductSlideshow } from '@/components/products';
import { ShopLayout } from '../../ShopLayout';

const product = initialData.products[0];

export default function ProductPage() {

  const params = useParams()
  // console.log(params);
  return (
    <ShopLayout title={'Fabul♥Hada - Tienda'} pageDescription={'Encuentra los mejores productos de FabulHada aquí'}>

      <section className="text-gray-900  md:text-xl overflow-hidden">
        <div className=" flex flex-wrap bg-white bg-opacity-70 p-2 rounded-2xl lg:px-10 lg:mx-14">

          {/* <div className="lg:w-[60%] w-full lg:h-auto h-64 object-cover                           object-center rounded px-4" > */}
          <div className="md:w-[60%] object-center rounded p-2 w-full lg:h-auto h-48 md:px-10" >
            {/* <img alt="ecommerce"  src="https://dummyimage.com/400x400" /> */}
            <ProductSlideshow 
                images={ product.images }
            />

          </div>

          <div className="md:w-[40%] w-full md:pr-10 lg:py-6 mb-6 lg:mb-0 lg:px-5">
            {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
              <h1 className={`${arya.className} text-gray-900 text-3xl
                     md:text-4xl font-extrabold m-2`}>
                {product.personage}
              </h1>
            <div className={`flex justify-between md:mb-4`}>
              <span className={`${arya.className} text-gray-900 text-3xl md:text-4xl  
                    font-extrabold`}>{currency.format(product.price)}
              </span>
              <div className='px-5 text-sky-800'>
                <h2>Cantidad</h2>
                <ItemCounter
                currentValue={1}
                // {tempCartProduct.quantity}
                updatedQuantity={1}
                // {onUpdateQuantity}
                // maxValue={ product.inStock > 10 ? 10: product.inStock }
                maxValue={5}
              />
              </div>
            </div>


            <div className="flex mb-4">
              <a className="flex text-sky-800 border-b-2 border-sky-800 py-2 px-1">
                Materiales
              </a>
            </div>
            <p className="leading-relaxed mb-4">{product.description}</p>

            <div className='flex gap-10 justify-center text-center'>
              <div className="flex flex-col">
                <span className="text-sky-800">Color</span>
                <span className="text-gray-900">{product.color}</span>
              </div>

              <div className="flex flex-col mb-5">
                <span className="text-sky-800">Tamaño</span>
                <span className="text-gray-900">{product.size}</span>
              </div>
              {/* <div className="flex flex-col">
                <span className="text-sky-800">Quantity</span>
                <span className="text-gray-900">4</span>
              </div> */}
            </div>
            <div className="flex px-10">

              <button className="flex-1 text-white bg-sky-600 border-0 py-2 md:py-3 text-xl md:text-xl px-3 md:px-6 focus:outline-none hover:bg-sky-800 rounded-full">Agregar al carrito</button>
              {/* <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button> */}
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>


    </ShopLayout>
  )
}
