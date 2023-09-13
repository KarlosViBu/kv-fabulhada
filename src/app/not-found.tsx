import Image from 'next/image';
import drago from '../../public/img/p404-2.png'
import { ShopLayout } from './shop/ShopLayout';

export default function NotFound() {
  return (
    <ShopLayout title='Pag Inexistente' pageDescription='Sin nada que mostrar aquí'>
      <div className='flex justify-center items-center  h-screen'>
        <div className='flex flex-col sm:flex-row  justify-center items-center gap-3 '>
          <h1 className='text-5xl font-extrabold'>404 </h1>
          <h2 className='text-center text-3xl font-bold w-2/5 '>No encontramos ninguna página aquí</h2>
          <Image src={drago} alt="drago"
              width={300} className='rounded-full'
              priority />
        </div>
      </div>
    </ShopLayout>
  )
}
