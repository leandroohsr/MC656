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

        console.log(`${dias}:${horas}:${minutos}:${segundos}`);
    };
    setInterval(timer, 1000);

    return (
        <div>
            <h1>Título</h1>
            {/* Outros elementos JSX aqui */}
        </div>
    );
};
