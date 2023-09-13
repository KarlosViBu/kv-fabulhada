"use client"
import React, { useState } from "react";
import { CategorIcon, DashboardIcon, ExitIcon, KeyIcon, OrdersIcon, UserIcon, UsersIcon } from "../iconos";
import Link from "next/link";
import Image from "next/image";
export const KsideMenu3 = () => {
    const [show, setShow] = useState(null);
    const [profile, setProfile] = useState(false);
    const [product, setProduct] = useState(false);
    const [deliverables, setDeliverables] = useState(false);
    return (
        <div className='flex scroll-m-0'>
            <div className='flex flex-col w-[300px] h-[900px]
             bg-blue-100 fixed inset-0 z-50'>
                <div>
                    <Link
                        href="" passHref
                        className="flex items-center border-s-[3px] border-blue-500 bg-blue-50 px-4 py-2 text-blue-700"
                    >
                        <UserIcon width={40} fill="#33496a" />

                        <span className="text-sm font-semibold"> Perfil </span>
                    </Link>
                </div>

                <div>
                    <Link
                        href="" passHref
                        className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                    >
                        <OrdersIcon width={25} fill="#33496a" />
                        <span className="text-sm font-semibold"> Mis Ordenes </span>
                    </Link>
                </div>

                <div className='block md:hidden'>
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            <span className='subtitulo px-4 m-3'> Categorías </span>
                            {/* <div>
                                <h3 className='subtitulo px-4 m-3'>Categorías</h3>
                            </div> */}

                            <span
                                className="shrink-0 transition duration-300 group-open:-rotate-180"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </summary>

                        <div className="mt-2 space-y-1 px-4">
                            <div>
                                <Link href='/category/amor-armonia' passHref
                                    className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                                >
                                    <Image src="/moon1.svg" alt="AA Logo"
                                        width={30} height={30} priority
                                    />
                                    <span className="text-sm font-semibold"> Amor - Armonía </span>
                                </Link>

                            </div>
                            <div>
                                <Link href='/category/abundancia-prosperidad' passHref
                                    className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                                >
                                    <Image src="/moon2.svg" alt="AA Logo"
                                        width={30} height={30} priority
                                    />
                                    <span className="text-sm font-semibold"> Abundancia - Prosperidad </span>
                                </Link>
                            </div>

                            <div>
                                <Link href='/category/salud-vitalidad' passHref
                                    className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                                >
                                    <Image src="/moon3.svg" alt="AA Logo"
                                        width={30} height={30} priority
                                    />
                                    <span className="text-sm font-semibold"> Salud - Vitalidad </span>
                                </Link>
                            </div>

                            <div>
                                <Link href='/category/sabiduria-poder' passHref
                                    className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                                >
                                    <Image src="/moon4.svg" alt="AA Logo"
                                        width={30} height={30} priority
                                    />
                                    <span className="text-sm font-semibold"> Sabiduría - Poder </span>
                                </Link>
                            </div>

                            <div>
                                <Link href='/category/naturaleza-zodiaco' passHref
                                    className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                                >
                                    <Image src="/moon5.svg" alt="AA Logo"
                                        width={30} height={30} priority
                                    />
                                    <span className="text-sm font-semibold"> Naturaleza - Zodíaco </span>
                                </Link>
                            </div>
                            <div>
                                <Link href='/category/proteccion-talismanes' passHref
                                    className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                                >
                                    <Image src="/moon6.svg" alt="AA Logo"
                                        width={30} height={30} priority
                                    />
                                    <span className="text-sm font-semibold"> Protección - Talisman </span>
                                </Link>
                            </div>
                        </div>
                    </details>
                </div>

                <div>
                    <Link
                        href="" passHref
                        className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                    >
                        <KeyIcon width={30} fill="#33496a" />

                        <span className="text-sm font-semibold"> Ingresar </span>
                    </Link>
                </div>

                <div>
                    <Link
                        href="" passHref
                        className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                    >
                        <ExitIcon width={25} fill="#33496a" />

                        <span className="text-sm font-semibold"> Salir </span>
                    </Link>
                </div>
                <div>
                    <h3 className='subtitulo px-4 m-3'>Admin Panel</h3>
                </div>
                <div>
                    <Link
                        href="" passHref
                        className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                    >
                        <DashboardIcon width={25} stroke="#033" />

                        <span className="text-sm font-semibold"> Dashboard </span>
                    </Link>
                </div>
                <div>
                    <Link
                        href="" passHref
                        className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                    >
                        <CategorIcon width={25} />

                        <span className="text-sm font-semibold"> Productos </span>
                    </Link>
                </div>
                <div>
                    <Link
                        href="" passHref
                        className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                    >
                        <OrdersIcon width={25} fill="#33496a" />

                        <span className="text-sm font-semibold"> Ordenes </span>
                    </Link>
                </div>
                <div>
                    <Link
                        href="" passHref
                        className="flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 text-gray-500 hover:border-gray-100 hover:bg-gray-50 hover:text-gray-700"
                    >
                        <UsersIcon width={25} />

                        <span className="text-sm font-semibold"> Usuarios </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
