import React from 'react';

const Modal = ({ personaje, handleClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-500 bg-opacity-75 transition-opacity">
            <div className="relative p-4 w-full max-w-2xl">
                <div className="relative  rounded-lg shadow bg-[darkslategray]">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {personaje.nombre}
                        </h3>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleClose}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-2 md:p-5 space-y-4 md:flex gap-3 sm:flex-row">
                        <div className='flex justify-center'>
                            <img src={personaje.imagen} alt={personaje.nombre} className="w-[17rem] h-[23rem]" />
                        </div>
                        <div className="md:flex-1"> {/* Flex-1 para ocupar el espacio restante */}
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                Edad: {personaje.edad}
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                Nacionalidad: {personaje.nacionalidad}
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                Género: {personaje.genero}
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                Profesión: {personaje.profesion}
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                Estado Civil: {personaje.estadoCivil}
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                Descripción: {personaje.descripcion}
                            </p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Modal;
