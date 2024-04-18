


export const LoginPage = () => {
    return (
        <div className="grid h-screen grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-8 -mt-20 bg-dark-green place-content-evenly">
            <p className="mb-20 text-5xl font-semibold text-white "> Entre usando sua conta </p>

            <div className="flex flex-col -mt-11">
                <label className="font-semibold text-white nome">Usuário/Email</label>
                <input className="h-8 w-96" type="text" id="email" />
            </div>
            <div className="flex flex-col">
                <label className="font-semibold text-white senha">Senha</label>

                <input className="h-8 w-96" type="password" id="senha" />
            </div>
            <p></p>

            <a href="#" className="font-semibold text-white -mt-14 senha">
                {' '}
                Esqueceu sua senha?{' '}
            </a>

            <button className="w-64 h-10 align-middle border border-indigo-600 rounded-lg btaluno bg-orange"> Entrar </button>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 -mt-20 place-content-evenly">
            <p className="mb-32 text-5xl font-semibold text-dark-green"> Não possui uma conta? </p>
            <div className="flex flex-col -mt-22">
                <button className="h-10 border border-indigo-600 rounded-lg w-72 btprof border-dark-green text-dark-green"> Criar uma conta</button>
                <p className="mt-6 mb-6 font-semibold text-center"> ____________ ou ______________ </p>
                <button className="object-right-top h-10 font-normal border border-indigo-600 rounded-lg w-72 btaluno border-dark-green text-dark-green"> Entrar como convidado</button>
            </div>
        </div>
    </div>
    );
}