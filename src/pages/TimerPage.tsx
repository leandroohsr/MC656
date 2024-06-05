export const TimerPage = () => {
    const timer = () => {
        var dataAlvo: Date = new Date('2024-07-26');
        dataAlvo.setHours(14,30,0);
        const dataAtual: Date = new Date();
        const tempo_miliseg: number = dataAlvo.getTime() - dataAtual.getTime();
        // vo transformar pra horas, minutos e segundos, da pra colocar isso em uma função
        const segundos_total = Math.floor(tempo_miliseg / 1000);
        const minutos_total = Math.floor(segundos_total / 60);
        const horas_total = Math.floor(minutos_total / 60);
        const dias = Math.floor(horas_total / 24) + 1;
        const segundos = segundos_total % 60;
        const minutos = minutos_total % 60;
        const horas = horas_total % 24;
        console.log(`${dias}:${horas}:${minutos}:${segundos}`);
        // console.log(dataAtual.toString());
    };
    setInterval(timer, 1000);

    return (
        <div>
            <h1>Título</h1>
            {/* Outros elementos JSX aqui */}
        </div>
    );
};
