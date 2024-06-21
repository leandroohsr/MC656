import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import imageRegister from '../assets/imgIA10.jpg';
import imageLogo from '../assets/imgIA11.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebaseConfig';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { EmailAuthCredential } from 'firebase/auth';
import { match } from 'assert';



export const RegisterPage = () => {

    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const emailRef = useRef<HTMLInputElement>(null);
    const errRef = useRef<HTMLParagraphElement>(null);

    const emailRegex = /^(?=.{9,})[a-zA-Z0-9.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*]).{8,20}/;

    useEffect(() => {
        if (emailRef.current){
            emailRef.current.focus();
        }
    }, [])


    

    useEffect(() => {
        const result = emailRegex.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);
    }, [email])

    useEffect(() => {
        setValidPassword(passwordRegex.test(password));
        setValidMatch(password === matchPassword);
    }, [password, matchPassword])

    useEffect(() => {
        setErrMsg('');
    }, [email, password, matchPassword])



    function handleSignOut(e: any) {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
        setValidMatch(false);
        setMatchPassword('');

        setValidPassword(false);
        setPassword('');

        setValidEmail(false);
        setEmail('');
    }

    if (loading) {
        return <p>Carregando...</p>
    }



    console.log(emailFocus)

    return (
        <div className="grid h-screen grid-cols-2">
            <div className="flex flex-col items-center justify-center gap-8 -mt-20 place-content-evenly">
                <Link to="/">
                    <img src={imageLogo} className="absolute top-0 left-0 h-24 mt-2 ml-2 w-14" alt="Logo" />
                </Link>
                <p className="text-5xl font-semibold text-dark-green"> Seja bem vindo! </p>
                <p className="mb-16 text-5xl font-semibold text-dark-green"> Faça o seu cadastro </p>
                <div className="flex flex-col -mt-22">
                    <section>
                        <p ref={errRef} className={errMsg ? "errmsg": "offscreen"} aria-live="assertive">{errMsg}</p>
                        <form className="max-w-sm mx-auto">
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
                                    Insira seu email: 
                                   {validEmail && email && (<FontAwesomeIcon icon={faCheck} className="my-green-icon" style={{color:'green'}}/>)}
                                   {!validEmail && email && (<FontAwesomeIcon icon={faTimes}className="my-red-icon" style={{color:'red'}}/>)}
                                </label>
                                <input 
                                    onChange={e => setEmail(e.target.value)} 
                                    type="text"
                                    id="email"
                                    ref={emailRef}
                                    autoComplete="off"
                                    required
                                    aria-invalid={validEmail ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={() => setEmailFocus(true)}
                                    onBlur={() => setEmailFocus(false)}
                                    className="shadow-sm bg-amber-100 border border-neutral-950 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    placeholder="p=np@gmail.com"
                                />
                                {emailFocus && email && !validEmail && (
                                    <p><FontAwesomeIcon icon={faInfoCircle}/>
                                        -Deve ter 9 ou mais caracteres.<br />
                                        -Deve começar com uma letra.<br />
                                        -Deve ter um @, com caracteres antes e depois do @.<br />
                                        -Após o @ deve ter um ".", com pelo menos duas letras depois<br />
                                        -Além do @ e do ., são apenas permitidos letras e números<br />
                                    </p>
                                )}   
                            </div>

                            <div className="mb-5">
                                <label htmlFor="passord" className="block mb-2 text-sm font-medium text-gray-900 ">
                                    Insira sua senha:
                                    {validPassword && password && (<FontAwesomeIcon icon={faCheck} className="green-icon" style={{color:'green'}}/>)}
                                    {!validPassword && password && (<FontAwesomeIcon icon={faTimes}className="red-icon" style={{color:'red'}}/>)}
                                </label>
                                <input 
                                    onChange={e => setPassword(e.target.value)} 
                                    type="password"
                                    id="password"
                                    required
                                    aria-invalid={validPassword ? "false" : "true"}
                                    aria-describedby="passwordnote"
                                    onFocus={() => setPasswordFocus(true)}
                                    onBlur={() => setPasswordFocus(false)}
                                    className="shadow-sm bg-amber-100 border border-neutral-950 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                                {passwordFocus && password && !validPassword && (
                                    <p>
                                        <FontAwesomeIcon icon={faInfoCircle}/>
                                        -De 8 a 20 caracteres<br />
                                        -Deve incluir ao menos uma letra maiúscula, uma minúscula, um número
                                        e um caractere especial<br />
                                        -Caracteres especiais permitidos: !@#$%&*<br />
                                    </p>
                                )}
                            </div>
                            
                            <div className="mb-5">
                                <label htmlFor="repita" className="block mb-2 text-sm font-medium text-gray-900 ">
                                    Repita sua senha:
                                    {validMatch && matchPassword && (<FontAwesomeIcon icon={faCheck} className="greenn" style={{color:'green'}}/>)}
                                    {!validMatch && matchPassword && (<FontAwesomeIcon icon={faTimes}className="redd" style={{color:'red'}}/>)}
                                </label>
                                <input 
                                    onChange={e => setMatchPassword(e.target.value)} className="shadow-sm bg-amber-100 border border-neutral-950 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                                    type="password"
                                    id="repita"
                                    aria-invalid={validMatch ? "false" : "true"}
                                    aria-describedby="confirmnote"
                                    onFocus={() => setMatchFocus(true)}
                                    onBlur={() => setMatchFocus(false)}
                                />
                                {matchFocus && !validMatch && matchPassword && (
                                    <p>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        -As senhas não são compatíveis
                                    </p>
                                )}
                            </div>

                            <div className="flex">
                                <button onClick={handleSignOut}
                                    type="submit" 
                                    className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
                                        !validMatch || !validPassword || !validEmail
                                        ? 'bg-gray-300 cursor-not-allowed'
                                        : 'bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:outline-none focus:ring-amber-300'}`}
                                    disabled={!validMatch || !validPassword || !validEmail}
                                    >
                                        Registrar
                                </button>
                                <a type="submit" href="/login" className="text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center text-decoretion-line: underline">Já possui uma conta?</a>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center border border-black">
                <img src={imageRegister}>
                </img>
            </div>
        </div>
    );
}