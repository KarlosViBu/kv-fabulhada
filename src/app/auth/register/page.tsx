import { arya } from "@/components/ui";
import { AuthLayout } from "../AuthLayout";
import Link from "next/link";

export default function LoginPage() {
   return (

      <AuthLayout title="Registrar">
         <div className="flex w-full md:mt-14 justify-center items-center overflow-hidden">

            <div className="flex flex-col justify-center items-center flex-1 px-3 py-8">

               <div className="w-full md:w-1/2 xl:w-1/3">
                  <div>
                     <h1 className={`${arya.className} mt-6 text-xl text-white  md:text-4xl font-extrabold`}>Crear Cuenta</h1>
                  </div>

                  <div className="mt-8">
                     <div className="mt-6">
                        <form action="#" method="POST" className="space-y-6">
                           <div className="kbox kborder px-10 py-7 mb-5 xl:mb-10">
                              <label
                                 htmlFor="text"
                                 className="relative block rounded-xl border-b-4 md:border-b-4  border-gray-200 shadow-sm focus-within:border-b-green-700 focus-within:border-b-4"
                              >
                                 <input
                                    type="name"
                                    id="name" name='name'
                                    className="peer w-full h-12 px-5 font-medium rounded-xl  border-none bg-white bg-opacity-40 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="Correo"
                                 />

                                 <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 
                        p-1.5  text-green-700 font-semibold transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base peer-focus:bg-opacity-0"
                                 >
                                    Nombre
                                 </span>
                              </label>

                              <label
                                 htmlFor="email"
                                 className="relative block rounded-xl border-b-4 mt-6 md:border-b-4  border-gray-200 shadow-sm focus-within:border-b-green-700 focus-within:border-b-4"
                              >
                                 <input
                                    type="email"
                                    id="email" name='email'
                                    className="peer w-full h-12 px-5 font-medium rounded-xl  border-none bg-white bg-opacity-40 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="Correo"
                                 />

                                 <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 
                        p-1.5  text-green-700 font-semibold transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base peer-focus:bg-opacity-0"
                                 >
                                    Correo
                                 </span>
                              </label>

                              <label
                                 htmlFor="password"
                                 className="relative block rounded-xl border-b-4 mt-6 md:border-b-4  border-gray-200 shadow-sm focus-within:border-b-green-700 focus-within:border-b-4"
                              >
                                 <input
                                    type="password"
                                    id="password" name='password'
                                    className="peer w-full h-12 px-5 font-medium rounded-xl  border-none bg-white bg-opacity-40 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                                    placeholder="Contraseña"
                                 />

                                 <span
                                    className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 
                        p-1.5  text-green-700 font-semibold transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-base peer-focus:bg-opacity-0"
                                 >
                                    Contraseña
                                 </span>
                              </label>

                              <div className="flex items-center justify-end mt-2  xl:mt-5">

                                 <Link href='/auth/login'
                                    className='block ml-2 text-sm xl:text-base text-gray-600 font-semibold'
                                 >
                                    ¿Ya tienes cuenta?
                                 </Link>
                              </div>
                           </div>
                           <div className="m-20">
                              <div className="">
                                 <button type="submit"
                                    className="kbordes rounded-full flex items-center justify-center w-full px-10 py-2 md:py-3 xl:text-2xl font-bold text-center text-green-200  hover:text-white transition duration-500 ease-in-out transform  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Crear
                                 </button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </AuthLayout >

   )
}
