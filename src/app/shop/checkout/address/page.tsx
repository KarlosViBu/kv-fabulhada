"use client"
import { useContext } from 'react';
// import { GetServerSideProps } from 'next'
// import { getToken } from 'next-auth/jwt';

// import { useRouter } from 'next/router';
// import { div, button, FormControl, div, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import Cookies from 'js-cookie';
import { ShopLayout } from '../../ShopLayout';
// import { useForm } from "react-hook-form";

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

            <h1 className='titulo text-center text-slate-100 m-3 md:mx-10'>Dirección</h1>

            <div className='grid grid-cols-1 lg:grid-cols-10 gap-4 my-3 p-2'>

               <div className='kbox kborder md:col-span-8 p-2 md:p-6 lg:p-14 lg:col-start-2
                     grid grid-cols-1 gap-4 md:grid-cols-2 md:mx-5'>

                  <label
                     htmlFor="firstName"
                     className="relative block rounded-xl border-b-4 md:border-b-4  border-gray-200 shadow-sm focus-within:border-b-sky-700 focus-within:border-b-4"
                  >
                     <input
                        type="text"
                        id="firstName" name='firstName'
                        className="peer w-full h-12 px-5 font-medium rounded-xl  border-none bg-white bg-opacity-40 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                        placeholder="Nombre"
                     />

                     <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 
                        p-1.5  text-sky-700 font-semibold transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm peer-focus:bg-opacity-0"
                     >
                        Nombre
                     </span>
                  </label>

                  <label
                     htmlFor="lastName"
                     className="relative block rounded-xl border-b-4  border-gray-200 shadow-sm focus-within:border-b-sky-700 focus-within:border-b-4"
                  >
                     <input
                        type="text"
                        id="lastName" name='lastName'
                        className="peer w-full h-12 px-5 font-medium rounded-xl  border-none bg-white bg-opacity-40 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                        placeholder="Apellidos"
                     />

                     <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 
                        p-1.5  text-sky-700 font-semibold transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm peer-focus:bg-opacity-0"
                     >
                        Apellidos
                     </span>
                  </label>

                  <label
                     htmlFor="address"
                     className="relative block rounded-xl border-b-4  border-gray-200 shadow-sm focus-within:border-b-sky-700 focus-within:border-b-4"
                  >
                     <input
                        type="text"
                        id="address" name='address'
                        className="peer w-full h-12 px-5 font-medium rounded-xl  border-none bg-white bg-opacity-40 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                        placeholder="Dirección"
                     />

                     <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 
                        p-1.5  text-sky-700 font-semibold transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm peer-focus:bg-opacity-0"
                     >
                        Dirección
                     </span>
                  </label>

                  <label
                     htmlFor="address2"
                     className="relative block rounded-xl border-b-4  border-gray-200 shadow-sm focus-within:border-b-sky-700 focus-within:border-b-4"
                  >
                     <input
                        type="text"
                        id="address2" name='address2'
                        className="peer w-full h-12 px-5 font-medium rounded-xl  border-none bg-white bg-opacity-40 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                        placeholder="Dirección 2"
                     />

                     <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 
                        p-1.5  text-sky-700 font-semibold transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm peer-focus:bg-opacity-0"
                     >
                        Dirección 2
                     </span>
                  </label>

                  <label
                     htmlFor="zip"
                     className="relative block rounded-xl border-b-4  border-gray-200 shadow-sm focus-within:border-b-sky-700 focus-within:border-b-4"
                  >
                     <input
                        type="text"
                        id="zip" name='zip'
                        className="peer w-full h-12 px-5 font-medium rounded-xl  border-none bg-white bg-opacity-40 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                        placeholder="Código postal"
                     />

                     <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 
                        p-1.5  text-sky-700 font-semibold transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm peer-focus:bg-opacity-0"
                     >
                        Código postal
                     </span>
                  </label>

                  <label
                     htmlFor="city"
                     className="relative block rounded-xl border-b-4  border-gray-200 shadow-sm focus-within:border-b-sky-700 focus-within:border-b-4"
                  >
                     <input
                        type="text"
                        id="city" name='city'
                        className="peer w-full h-12 px-5 font-medium rounded-xl  border-none bg-white bg-opacity-40 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                        placeholder="Ciudad"
                     />

                     <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 
                        p-1.5  text-sky-700 font-semibold transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm peer-focus:bg-opacity-0"
                     >
                        Ciudad
                     </span>
                  </label>

                  <label
                     htmlFor="phone"
                     className="relative block rounded-xl border-b-4  border-gray-200 shadow-sm focus-within:border-b-sky-700 focus-within:border-b-4"
                  >
                     <input
                        type="text"
                        id="phone" name='phone'
                        className="peer w-full h-12 px-5 font-medium rounded-xl  border-none bg-white bg-opacity-40 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                        placeholder="Teléfono"
                     />

                     <span
                        className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 
                        p-1.5  text-sky-700 font-semibold transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm peer-focus:bg-opacity-0"
                     >
                        Teléfono
                     </span>
                  </label>
               </div>
            </div>

            <div className='flex justify-center pb-5 md:mt-12'>
               <button
                  type="submit"
                  className="kbordes w-64 px-2 py-4 md:col-span-2 lg:px-1 md:px-6 text-green-200  hover:text-white"
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