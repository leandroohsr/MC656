import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imageLogin from '../assets/imgIA10.jpg';
import imageLogo from '../assets/imgIA11.png'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebaseConfig';

export const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
  
    function handleSignIn(e:any){
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    if(loading){
        //centralizar no meio da tela usando o tailwind
        
        return (

                <div className="flex items-center justify-center h-screen">
                <div className='display: block;'>
                    <div className='mb-10'>
                        <h1 className="text-xl font-bold leading-snug tracking-tight text-gray-800 lg:text-xl lg:leading-tight xl:text-xl xl:leading-tight">
                            Sabia que: os Jogos Olímpicos surgiram na Grécia por volta do século VIII antes de Cristo.
                        </h1> 
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className="w-20 h-20 border-8 border-gray-300 rounded-full display: animate-spin border-t-blue-600" />
                    </div>
        
                </div>
        
                </div>


        );
    }
    if(user){
        console.log(user.user?.email);
        window.location.href = '/';

        // return <p>{user.user?.email}</p>
    }

    return (
        <div className="grid h-screen grid-cols-2">
            <div className="flex flex-col items-center justify-center border border-black">
                <img src = {imageLogin}>
                </img>
            </div>
            <div className="flex flex-col items-center justify-center border border-black">
                <Link to="/">
                    <img src={imageLogo} className="absolute top-0 right-0 h-24 mt-2 mr-2 w-14" alt="Logo"/>
                </Link>
                <div className="flex flex-col items-center justify-center gap-8 -mt-20 bg-dark-green place-content-evenly">
                    <p className="mb-20 text-5xl font-semibold text-black "> Entre usando sua conta </p>
                    <div className="flex flex-col -mt-22">
                        <form className="max-w-sm mx-auto">
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Insira seu email</label>
                                <input onChange={e => setEmail(e.target.value)} type="email" id="email" className="shadow-sm bg-amber-100 border border-neutral-950 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="p=np@gmail.com" required />
                            </div>
                            <div className="mb-5">
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Insira sua senha</label>
                                <input onChange={e => setPassword(e.target.value)} type="password" id="password" className="shadow-sm bg-amber-100 border border-neutral-950 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                            </div>
                                <button onClick={handleSignIn} type="submit" className="text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Entrar</button>
                                <a type="submit" href = "/register" className="text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center text-decoretion-line: underline">Ainda não possui uma conta?</a>
                        </form>                
                    </div>
                </div>
            </div>
        </div>
        
    );
}


