import { arya, ruluko, seymour } from "@/components/ui";
import { NavApp } from "@/components/ui/NavApp";
import Image from 'next/image';

export default function Home() {

  return (
    <>
      <NavApp />
      <section className={`  text-slate-300 text-xl lg:text-2xl font-bold  body-font`}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            {/* <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">FabulHada</h1> */}

            <div className= {`${seymour.className} text-4xl lg:text-6xl font-extrabold mb-5`}>
              <span className="animate-pulse tracking-normal lg:tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                FABULHADA
              </span>
            </div>
            <p className="slate-100 lg:w-1/2 w-full leading-relaxed text-2xl lg:text-3xl font-semibold">
              Elementos Mágicos y de Protección.</p>
            {/* <p className="slate-100 lg:w-1/2 w-full leading-relaxed text-2xl lg:text-3xl font-semibold">
              Elaborados artesanalmente con materiales reciclados.</p> */}
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border cborde1 p-6 rounded-xl">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full 
                  ring-[#f0aaad] ring-2 mb-4">
                  <Image src="/moon1.svg" alt="AA Logo"
                    width={40} height={40} priority
                  />
                </div>
                <h2 className="text-2xl lg:text-3xl text-slate-100 font-bold title-font mb-2">Hadas - Angeles - Elfos - Budas</h2>
                <p className="leading-relaxed">Seres mágicos y elementos del Amor y la Armonía.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border cborde2 p-6 rounded-xl">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full 
                    ring-[#efca5c] ring-2 mb-4">
                  <Image src="/moon2.svg" alt="AA Logo"
                    width={40} height={40} priority
                  />
                </div>
                <h2 className="text-2xl lg:text-3xl text-slate-100 font-bold title-font mb-2">Hadas - Angeles - Elfos - Gnomo - Duende</h2>
                <p className="leading-relaxed">Seres mágicos y elementos de Abundancia y Prosperidad.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border cborde3 p-6 rounded-xl">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full
                    ring-[#0ced17] ring-2 text-indigo-500 mb-4">
                  <Image src="/moon3.svg" alt="AA Logo"
                    width={40} height={40} priority
                  />
                </div>
                <h2 className="text-2xl lg:text-3xl text-slate-100 font-bold title-font mb-2">Hadas - Angeles</h2>
                <p className="leading-relaxed">Seres mágicos y elementos de Salud y Vitalidad.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border cborde4 p-6 rounded-xl">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full 
                    ring-[#57a6f0] ring-2 mb-4">
                  <Image src="/moon4.svg" alt="AA Logo"
                    width={40} height={40} priority
                  />
                </div>
                <h2 className="text-2xl lg:text-3xl text-slate-100 font-bold title-font mb-2">Hadas - Magos - Budas - Genio - Brujas</h2>
                <p className="leading-relaxed">Seres mágicos y elementos de Sabiduría y Poder.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border cborde5 p-6 rounded-xl">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full 
                    ring-[#ba6bf7] ring-2 mb-4">
                  <Image src="/moon5.svg" alt="AA Logo"
                    width={40} height={40} priority
                  />
                </div>
                <h2 className="text-2xl lg:text-3xl text-slate-100 font-bold title-font mb-2">Hadas - Sirenas - Animales Míticos - Zodíaco Chino</h2>
                <p className="leading-relaxed">Seres y elementos de Naturaleza y Zodíaco.</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border cborde6 p-6 rounded-xl">
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full 
                    ring-[#f9ab4c] ring-2 mb-4">
                  <Image src="/moon6.svg" alt="AA Logo"
                    width={40} height={40} priority
                  />
                </div>
                <h2 className="text-2xl lg:text-3xl text-slate-100 font-bold title-font mb-2">Lámparas - Fuentes - Bisutería - Recipientes - Portasahumerio</h2>
                <p className="leading-relaxed">Elementos y talismanes de protección personal y para el hogar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
