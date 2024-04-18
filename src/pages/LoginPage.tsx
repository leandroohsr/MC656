import React, { useState } from 'react';




export const LoginPage = () => {
    const [showModal, setShowModal] = useState(false);

    const tenteShowModal = () => {
        setShowModal(!showModal);
    }

    const abrirModal = () => {
        setShowModal(true);
    };

    const fecharModal = () => {
        setShowModal(false);
    };

    return (
        <div className="grid h-screen grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-8 -mt-20 bg-dark-green place-content-evenly">
            <p className="mb-20 text-5xl font-semibold text-black "> Entre usando sua conta </p>

            <div className="flex flex-col -mt-11">
                <label className="font-semibold text-black nome">Usuário/Email</label>
                <input className="h-8 w-96" type="text" id="email" />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold text-black senha">Senha</label>

                <input className="h-8 w-96" type="password" id="senha" />
            </div>
            <p></p>

            <a href="#" className="font-semibold text-black -mt-14 senha">
                {' '}
                Esqueceu sua senha?{' '}
            </a>

            <button className="w-64 h-10 align-middle border border-indigo-600 rounded-lg btaluno bg-orange"> Entrar </button>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 -mt-20 place-content-evenly">
            <p className="mb-32 text-5xl font-semibold text-dark-green"> Não possui uma conta? </p>
            <div className="flex flex-col -mt-22">
                <button onClick={tenteShowModal} className="h-10 border border-indigo-600 rounded-lg w-72 btprof border-dark-green text-dark-green"> Criar uma conta</button>
                {showModal && (<Modal props = {showModal}></Modal>)}
                <p className="mt-6 mb-6 font-semibold text-center"> ______________ ou ______________ </p>
                <button className="object-right-top h-10 font-normal border border-indigo-600 rounded-lg w-72 btaluno border-dark-green text-dark-green"> Entrar como convidado</button>
            </div>
        </div>
    </div>
    );
}


function Modal(props: any) {

    const fecharModal = () => {
        props.showModal = !props.showModal
    };
    return(
        <>
        {(
                    <div id="default-modal" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="relative p-4 w-full max-w-2xl max-h-full">
                            {/* Modal content */}
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                {/* Modal header */}
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Terms of Service
                                    </h3>
                                    <button onClick={fecharModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                {/* Modal body */}
                                <div className="p-4 md:p-5 space-y-4">
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                                    </p>
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                                    </p>
                                </div>
                                {/* Modal footer */}
                                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                    <button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                                    <button data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </>
    );
}