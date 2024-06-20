export const TimerPage = () => {
    const calcTime = (tempo_miliseg: number) => {
        var segundos_total = Math.floor(tempo_miliseg / 1000);
        var minutos_total = Math.floor(segundos_total / 60);
        var horas_total = Math.floor(minutos_total / 60);

        var dias = Math.floor(horas_total / 24) + 1;
        var horas = horas_total % 24;
        var minutos = minutos_total % 60;
        var segundos = segundos_total % 60;

        return [dias, horas, minutos, segundos];
    };

    const formatarTempo = (dias: number, horas: number, minutos: number, segundos: number) => {
        //Devolve os valores temporais em string com 0s a mais se for necessário
        var diasFormat, horasFormat, minutosFormat, segundosFormat;

        if (dias < 100) {
            if (dias < 10) {
                diasFormat = '00' + dias.toString();
            }
            else {
                diasFormat = '0' + dias.toString();
            }
        }
        else {
            diasFormat = dias.toString();
        }

        if (horas < 10) {
            horasFormat = '0' + horas.toString();
        }
        else {
            horasFormat = horas.toString();
        }

        if (minutos < 10) {
            minutosFormat = '0' + minutos.toString();
        }
        else {
            minutosFormat = minutos.toString();
        }

        if (segundos < 10) {
            segundosFormat = '0' + segundos.toString();
        }
        else {
            segundosFormat = segundos.toString();
        }

        return [diasFormat, horasFormat, minutosFormat, segundosFormat];
    }

    const timer = () => {
        // Define data do começo das olimpíadas
        var dataAlvo: Date = new Date('2024-07-26');
        dataAlvo.setHours(14,30,0);

        // Checa data atual
        var dataAtual: Date = new Date();

        // Calcula diferença das datas
        var tempo_miliseg: number = dataAlvo.getTime() - dataAtual.getTime();

        // Calcula os dias/horas/minutos/segundos da diferença
        var [dias, horas, minutos, segundos] = calcTime(tempo_miliseg);

        var [diasFormat, horasFormat, minutosFormat, segundosFormat] = formatarTempo(dias, horas, minutos, segundos);

        document.getElementById("timerPanel")!.textContent = diasFormat + ":" + horasFormat + ":" + minutosFormat + ":" + segundosFormat;
    };
    setInterval(timer, 1000);

    return (
        <div className="w-full justify-center py-[35vh] bg-gradient-to-bl from-amber-500 to-grey">
            <a href="/" className='absolute border-8 rounded-lg border-black text-gray-400 bg-black top-[5px] left-[5px]'>Home Page</a>
            <span className="text-center block text-[28px]">Faltam somente...</span>
            <span id="timerPanel" className="font-bold text-8xl text-center z-1 block">00:00:00:00</span>
            <span className='absolute left-[458px] font-bold'>Dias</span>
            <div className="space-x-[78px] text-center absolute left-[610px]">
                <span className='font-bold'>Horas</span>
                <span className='font-bold'>Minutos</span>
                <span className='font-bold'>Segundos</span>
            </div>
            <br />
            <span className="text-center block text-[28px]">Para as olimpíadas de Paris 2024!</span>
        </div>
    );
};
