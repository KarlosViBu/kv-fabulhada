import { arya } from "@/components/ui";
import { AuthLayout } from "../AuthLayout";
import Link from "next/link";

export default function LoginPage() {
   return (

      <AuthLayout title="Ingresar">
         <div className="flex w-full md:mt-14 justify-center items-center overflow-hidden">
            
            <div className="flex flex-col justify-center items-center flex-1 px-3 py-8">
            
               <div className="w-full md:w-1/2 xl:w-1/3">
                  <div>
                     <h1 className={`${arya.className} mt-6 text-xl text-white  md:text-4xl font-extrabold`}>Iniciar Sesión</h1>
                  </div>

                  <div className="mt-8">
                     <div className="mt-6">
                        <form action="#" method="POST" className="space-y-6">
                           <div className="kbox kborder px-10 py-7 mb-5 xl:mb-10">
                              <label
                                 htmlFor="email"
                                 className="relative block rounded-xl border-b-4 md:border-b-4  border-gray-200 shadow-sm focus-within:border-b-green-700 focus-within:border-b-4"
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

                              <div className="flex items-center justify-between mt-2  xl:mt-5">
                                 <div className="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" placeholder="Your password" className="w-4 h-4 md:w-4 md:h4 text-green-600 border-gray-200 rounded focus:ring-green-500" />
                                    <label htmlFor="remember-me" className="block ml-2 text-sm xl:text-base text-gray-600 font-semibold"> Recordarlo </label>
                                 </div>

                                 {/* <div className="text-sm">
                                    <a href="#" className="font-medium text-blue-600 hover:text-blue-500"> Forgot your password? </a>
                                 </div> */}
                                 <Link href='/auth/register'
                                    className='block ml-2 text-sm xl:text-base text-gray-600 font-semibold'
                                 >
                                    ¿No tienes cuenta?
                                 </Link>
                              </div>
                           </div>
                           <div className="m-20">
                              <div className="">
                                 <button type="submit"
                                    className="kbordes rounded-full flex items-center justify-center w-full px-10 py-2 md:py-3 xl:text-2xl font-bold text-center text-green-200  hover:text-white transition duration-500 ease-in-out transform  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Ingresar</button>
                              </div>
                           </div>
                        </form>
                        <div className="relative my-6 mx-14">
                           <div className="absolute inset-0 flex items-center">
                              <div className="w-full border-t border-gray-300"></div>
                           </div>
                           <div className="relative flex justify-center text-sm mt-3">
                              <span className="px-2 bg-white text-neutral-600 rounded-xl"> Continuar con </span>
                           </div>
                        </div>
                        <div className="px-20">
                           <button type="submit" className="w-full items-center block px-10 py-3 md:py-3.5 text-base md:text-2xl font-semibold text-center text-white transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                              <div className="flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/><path fill="#FF3D00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"/><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/></svg>

                                 {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className="w-6 h-6" viewBox="0 0 48 48">
                                        <defs>
                                            <path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"></path>
                                        </defs>
                                        <clipPath id="b">
                                            <use xlink:href="#a" overflow="visible"></use>
                                        </clipPath>
                                        <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"></path>
                                        <path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"></path>
                                        <path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"></path>
                                        <path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"></path>
                                    </svg> */}
                                 <span className="ml-4"> Google</span>
                              </div>
                           </button>
                        </div>
                     </div>
                  </div>


               </div>
            </div>
            {/* <div className="relative flex-1 hidden w-0 overflow-hidden lg:block">
            <img className="absolute inset-0 object-cover w-full h-full" src="/assets/images/placeholders/rectangleWide.png" alt=""/>
        </div> */}
         </div>
      </AuthLayout>

   )
}
