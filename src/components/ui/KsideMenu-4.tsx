"use client"
import React, { useState } from "react";
export const KsideMenu = () => {
    const [show, setShow] = useState(null);
    const [profile, setProfile] = useState(false);
    const [product, setProduct] = useState(false);
    const [deliverables, setDeliverables] = useState(false);
    return (
        <>
        <button className='bg-blue-300 text-white p-3'>Menu</button>
        <div id="modal-component-container" className='fixed inset-0 z-50'>
            <div className="modal-flex-container 
                            flex min-h-screen 
                            text-end sm:block sm:p-0"
            >
                <div className="modal-bg-container fixed inset-0 
                                bg-gray-700 bg-opacity-75"
                >

                </div>
                <div className="modal-space-container"></div>
                <div className="modal-container inline-block align-bottom bg-green-200 
                                text-left overflow-hidden shadow-2xl transform transition-all
                                sm:my-8 sm:align-middle sm:max-w-lg w-1/2"
                >
                    <div className="modal-wrapper bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 min-h-screen">
                        <div className="modal-wrapper-flex sm:flex sm:items-start">
                            <div className="modal-actions mt-3 sm:mt-0 sm:ml-4 sm:text-left
                                            text-lg font-medium text-gray-900"
                            >
                                Buscar

                            </div>
                            <div className="modal-content">
                                <li>Opcion 1</li>
                                <li>Opcion 2</li>
                                <li>Opcion 3</li>
                                <li>Opcion 4</li>
                                <li>Opcion 1</li>
                                <li>Opcion 2</li>
                                <li>Opcion 3</li>
                                <li>Opcion 4</li>
                                <li>Opcion 1</li>
                                <li>Opcion 2</li>
                                <li>Opcion 3</li>
                                <li>Opcion 4</li>
                                <li>Opcion 1</li>
                                <li>Opcion 2</li>
                                <li>Opcion 3</li>
                                <li>Opcion 4</li>
                                <li>Opcion 1</li>
                                <li>Opcion 2</li>
                                <li>Opcion 3</li>
                                <li>Opcion 4</li>
                            </div>

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    );
}
