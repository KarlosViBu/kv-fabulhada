"use client"
import { useContext } from 'react';
// import { GetServerSideProps } from 'next'
// import { getToken } from 'next-auth/jwt';

// import { useRouter } from 'next/router';
// import { div, button, FormControl, div, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import Cookies from 'js-cookie';
// import { useForm } from "react-hook-form";
import { ShopLayout } from '../ShopLayout';

// import { CartContext } from '../../context';


type FormData = {
   firstName: string;
   lastName: string;
   address: string;
   address2?: string;
   zip: string;
   city: string;
   country: string;
   phone: string;
}

/*
const getAddressFromCookies = (): FormData => {
   return {
      firstName: Cookies.get('firstName') || '',
      lastName: Cookies.get('lastName') || '',
      address: Cookies.get('address') || '',
      address2: Cookies.get('address2') || '',
      zip: Cookies.get('zip') || '',
      city: Cookies.get('city') || '',
      country: Cookies.get('country') || 'Colombia',
      phone: Cookies.get('phone') || '',
   }
}
*/

export default function AddressPage() {

   // const router = useRouter();
   /*
    const { updateAddress } = useContext(CartContext);
 
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
       defaultValues: getAddressFromCookies()
    });
 
    const onSubmitAddress = (data: FormData) => {
       updateAddress(data);
       router.push('/checkout/summary');
    }
 */
   return (
      <ShopLayout title="Dirección" pageDescription="Confirmar dirección del destino">
         {/* <form onSubmit={handleSubmit(onSubmitAddress)}> */}
         <form className=''>

            <h1 className='titulo text-slate-100 m-3 md:mx-10'>Dirección</h1>

            <div className='grid grid-cols-1 lg:grid-cols-10 gap-4 my-3 p-2'>

               <div className='kbox md:col-span-8 p-2 lg:p-4 lg:col-start-2
                     grid grid-cols-1 gap-4 md:grid-cols-2 md:mx-5'>


                  <label
                     htmlFor="Apellido"
                     className="relative block rounded-xl border-b-[4px] text-lg
                      border-gray-200  shadow-sm focus-within:border-sky-600 "
                  >
                     <input
                        type="text"
                        id="Apellido" name="Apellido"
                        className="peer h-12 w-full  px-6 border-none bg-transparent rounded-xl
                              placeholder-transparent focus:border-transparent focus:outline-none
                              focus:ring-0 bg-white bg-opacity-50"
                        placeholder="Apellido"
                     />

                     <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white bg-opacity-10
                        p-1.5  text-sky-700 font-semibold transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm peer-focus:bg-opacity-0"
                     >
                        Apellido
                     </span>
                  </label>

                  {/* <label
                     htmlFor="Direccion"
                     className="relative block rounded-xl border-b-[4px] text-lg
                      border-gray-200  shadow-sm focus-within:border-sky-600 "
                  >
                     <input
                        type="text"
                        id="Direccion" name="Direccion"
                        className="peer h-12 w-full  px-6 border-none bg-transparent rounded-xl
                              placeholder-transparent focus:border-transparent focus:outline-none
                              focus:ring-0 bg-white bg-opacity-50"
                        placeholder="Direccion"
                     />

                     <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white bg-opacity-10
                        p-1.5  text-sky-700 font-semibold transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm peer-focus:bg-opacity-0"
                     >
                        Dirección
                     </span>
                  </label> */}

                  <div className="flex flex-col relative">
                     <div className="flex flex-row w-full justify-between">
                        <input id="nombre" placeholder="Nombre" name="nombre"
                           className="peer px-5 
                                   kinput"
                        />
                        <label htmlFor="nombre"
                           className="absolute left-1 top-0 text-sky-700 text-sm md:text-base font-semibold  px-2
                         peer-placeholder-shown:text-sm  peer-placeholder-shown:text-blue-700 peer-placeholder-shown:font-medium
                                   peer-placeholder-shown:top-5 transition-all
                                   peer-focus:-top-1 peer-focus:text-sm"
                        >Nombre 20</label>
                     </div>
                  </div>

                  <label
                     htmlFor="Direccion"
                     className="relative block rounded-xl border-b-[4px] text-lg
                      border-gray-200  shadow-sm focus-within:border-sky-600 "
                  >
                     <input
                        type="text"
                        id="Direccion2" name="Direccion2"
                        className="peer h-12 w-full  px-6 border-none bg-transparent rounded-xl
                              placeholder-transparent focus:border-transparent focus:outline-none
                              focus:ring-0 bg-white bg-opacity-50"
                        placeholder="Direccion"
                     />

                     <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white bg-opacity-10
                        p-1.5  text-sky-700 font-semibold transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm peer-focus:bg-opacity-0"
                     >
                        Dirección 2
                     </span>
                  </label>

                  <label
                     htmlFor="Direccion2"
                     className="relative block rounded-xl border-b-[4px] text-lg
                      border-gray-200  shadow-sm focus-within:border-sky-600 "
                  >
                     <input
                        type="text"
                        id="Direccion2" name="Direccion2"
                        className="peer h-12 w-full  px-6 border-none bg-transparent rounded-xl
                              placeholder-transparent focus:border-transparent focus:outline-none
                              focus:ring-0 bg-white bg-opacity-50"
                        placeholder="Direccion"
                     />

                     <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white bg-opacity-10
                        p-1.5  text-sky-700 font-semibold transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm peer-focus:bg-opacity-0"
                     >
                        Dirección 2
                     </span>
                  </label>

                  <label
                     htmlFor="Direccion"
                     className="relative block rounded-xl border-b-[4px] text-lg
                      border-gray-200  shadow-sm focus-within:border-sky-600 "
                  >
                     <input
                        type="text"
                        id="Direccion2" name="Direccion2"
                        className="peer h-12 w-full  px-6 border-none bg-transparent rounded-xl
                              placeholder-transparent focus:border-transparent focus:outline-none
                              focus:ring-0 bg-white bg-opacity-50"
                        placeholder="Direccion"
                     />

                     <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white bg-opacity-10
                        p-1.5  text-sky-700 font-semibold transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm peer-focus:bg-opacity-0"
                     >
                        Código Postal
                     </span>
                  </label>

                  <label
                     htmlFor="Direccion"
                     className="relative block rounded-xl border-b-[4px] text-lg
                      border-gray-200  shadow-sm focus-within:border-sky-600 "
                  >
                     <input
                        type="text"
                        id="Direccion2" name="Direccion2"
                        className="peer h-12 w-full  px-6 border-none bg-transparent rounded-xl
                              placeholder-transparent focus:border-transparent focus:outline-none
                              focus:ring-0 bg-white bg-opacity-50"
                        placeholder="Direccion"
                     />

                     <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white bg-opacity-10
                        p-1.5  text-sky-700 font-semibold transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm peer-focus:bg-opacity-0"
                     >
                        Ciudad
                     </span>
                  </label>

                  <label
                     htmlFor="Direccion"
                     className="relative block rounded-xl border-b-[4px] text-lg
                      border-gray-200  shadow-sm focus-within:border-sky-600 "
                  >
                     <input
                        type="text"
                        id="Direccion2" name="Direccion2"
                        className="peer h-12 w-full  px-6 border-none bg-transparent rounded-xl
                              placeholder-transparent focus:border-transparent focus:outline-none
                              focus:ring-0 bg-white bg-opacity-50"
                        placeholder="Direccion"
                     />

                     <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white bg-opacity-10
                        p-1.5  text-sky-700 font-semibold transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm peer-focus:bg-opacity-0"
                     >
                        Teléfono
                     </span>
                  </label>

                  {/* <div className='px-[70px] py-2 md:col-span-2  md:px-60 lg:px-64 sm:px-20 xl:px-[380px'>
                <div className='video py-4 text-center'>Revisar pedido</div>
            </div> */}
               </div>
            </div>

            <div className='flex justify-center pb-5'>
               <button
                  type="submit"
                  className="boton w-64 px-2 py-4 md:col-span-2 lg:px-1 md:px-6"
               >
                  Revisar pedido
               </button>
            </div>

         </form>
      </ShopLayout>
   )
}

/*
export const getServerSideProps: GetServerSideProps = async ({ req }) => {

   const session: any = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

   if (session) {
      return { props: {} }
   }
   else {
      return {
         redirect: {
            destination: '/auth/login?p=/checkout/address',
            permanent: false
         }
      }
   }

}
*/