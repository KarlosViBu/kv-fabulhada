"use client"
import Image from "next/image";
import Link from "next/link";
import { CartIcon, SearchIcon } from "../iconos";

export const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50  bg-white bg-opacity-80">
      <nav className='flex justify-between py-5 px-3'>

        <Link href="/" className="flex items-center">
               <span className='text-yellow-600 text-3xl'>Fabul</span>
               <span className='text-red-600 text-2xl'>♥</span>
               <span className='text-blue-600 text-3xl'>Hada</span>
        </Link>

        <div className='hidden md:flex gap-8 justify-center'>
          <Link href='/category/amor-armonia' passHref >
            <Image src="/moon1.svg" alt="AA Logo"
              width={30} height={30} priority
            />

          </Link>
          <Link href='/category/abundancia-prosperidad' passHref >
            <Image src="/moon2.svg" alt="AA Logo"
              width={30} height={30} priority
            />

          </Link>
          <Link href='/category/salud-vitalidad' passHref >
            <Image src="/moon3.svg" alt="AA Logo"
              width={30} height={30} priority
            />

          </Link>
          <Link href='/category/sabiduria-poder' passHref >
            <Image src="/moon4.svg" alt="AA Logo"
              width={30} height={30} priority
            />

          </Link>
        </div>
        <div className='flex gap-5 justify-center'>
          <SearchIcon width={25} fill="#33496a"/>

          <Link href="shop/cart" className='flex relative'>

            <CartIcon width={25}/>
            <span className='bg-blue-950 text-center text-blue-100 font-bold text-[11px] 
              rounded-full w-6 h-6  px-1 py-1  absolute top-[-12px] left-4'>
              5
            </span>
          </Link>

          <button className="boton2">Menu</button>
        </div>
      </nav>

    </div>
  )

}
