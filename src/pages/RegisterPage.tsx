import React, { useState } from 'react';
import imageRegister from '../assets/imgIA10.jpg';


export const RegisterPage = () => {
    return (
        <div className="grid h-screen grid-cols-2">
            <div className="flex flex-col items-center justify-center gap-8 -mt-20 place-content-evenly">
                <p className="text-5xl font-semibold text-dark-green"> Seja bem vindo! </p>
                <p className="mb-16 text-5xl font-semibold text-dark-green"> Faça o seu cadastro </p>
                <div className="flex flex-col -mt-22">
                    <form className="max-w-sm mx-auto">
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Insira seu email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="p=np@gmail.com" required />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Insira sua senha</label>
                            <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Repita sua senha</label>
                            <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                        </div>
                        <div className = "flex">
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrar</button>
                            <a type="submit" href = "/login" className="text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center">Já possui uma conta?</a>
                        </div>
                    </form> 
                </div>
            </div>
            <div className="flex flex-col items-center justify-center border border-black">
                <img src = {imageRegister}>
                </img>
            </div>
        </div>
    );
}