import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imageRegister from '../assets/imgIA10.jpg';
import imageLogo from '../assets/imgIA11.png'


export const RegisterPage = () => {
    return (
        <div className="grid h-screen grid-cols-2">
            <div className="flex flex-col items-center justify-center gap-8 -mt-20 place-content-evenly">
                <Link to="/">
                    <img src={imageLogo} className="absolute mt-2 ml-2 top-0 left-0 h-24 w-14" alt="Logo"/>
                </Link>
                <p className="text-5xl font-semibold text-dark-green"> Seja bem vindo! </p>
                <p className="mb-16 text-5xl font-semibold text-dark-green"> Faça o seu cadastro </p>
                <div className="flex flex-col -mt-22">
                    <form className="max-w-sm mx-auto">
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Insira seu email</label>
                            <input type="email" id="email" className="shadow-sm bg-amber-100 border border-neutral-950 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="p=np@gmail.com" required />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Insira sua senha</label>
                            <input type="password" id="password" className="shadow-sm bg-amber-100 border border-neutral-950 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                        </div>
                        <div className="mb-5">
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Repita sua senha</label>
                            <input type="password" id="repeat-password" className="shadow-sm bg-amber-100 border border-neutral-950 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                        </div>
                        <div className="flex">
                            <button type="submit" className="text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Registrar</button>
                            <a type="submit" href="/login" className="text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center text-decoretion-line: underline">Já possui uma conta?</a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center border border-black">
                <img src={imageRegister}>
                </img>
            </div>
        </div>
    );
}