import {
    FaceSmileIcon,
    ChartBarSquareIcon,
    CursorArrowRaysIcon,
    DevicePhoneMobileIcon,
    AdjustmentsHorizontalIcon,
    SunIcon,
    CalendarDaysIcon,
    CalendarIcon
  } from "@heroicons/react/24/solid";
  
  import benefitOneImg from "../assets/player.jpg";
  import benefitTwoImg from "../assets/blob.png";
  
  const benefitOne = {
    title: "Agenda de Eventos",
    desc: "Acompanhe facilmente as datas e horários dos eventos das Olimpíadas de Paris 2024. Assim, garantindo que voce nunca perca nenhuma \
    competição ou celebração memorável! Se prepare para mergulhar na atmosfera das Olimpíadas e planejar sua jornada vivenciando momentos \
    inesquecíveis.",
    image: benefitOneImg,
    bullets: [
      {
        title: "Mantenha-se atualizado",
        desc: "Fique por dentro de todos os resultados e eventos das Olimpíadas de Paris 2024. Acompanhe as últimas notícias e atualizações",
        icon: <CalendarDaysIcon />,
      },
      {
        title: "Se prepare para uma experiência olímpica",
        desc: "Planeje sua jornada para testemunhar performances incríveis.",
        icon: <ChartBarSquareIcon />,
      },
      {
        title: "Explore a programação de eventos",
        desc: "Descubra eventos por data, localização e categoria para encontrar facilmente o que você está procurando.",
        icon: <CursorArrowRaysIcon />,
      },
    ],
  };
  
  const benefitTwo = {
    title: "Conecte-se e Compartilhe a Emoção das Olimpíadas de Paris",
    desc: "Participe do nosso chat exclusivo e vivencie os Jogos Olímpicos de Paris como nunca antes. Conecte-se com fãs de todo o mundo, receba atualizações em tempo real e aumente seu engajamento nos eventos. Aproveite ao máximo sua experiência olímpica compartilhando momentos inesquecíveis com outros apaixonados por esporte.",
    image: benefitTwoImg,
    bullets: [
      {
        title: "Conecte-se com Fãs Globais",
        desc: "Converse com fãs de diferentes países, compartilhe sua paixão pelo esporte e faça novas amizades.",
        icon: <CalendarDaysIcon />,
      },
      {
        title: "Receba Atualizações Instantâneas",
        desc: "Obtenha dicas e informações em tempo real sobre eventos e atrações de Paris.",
        icon: <ChartBarSquareIcon />,
      },
      {
        title: "Aumente a Emoção",
        desc: " Participe de discussões animadas, compartilhe reações e viva intensamente cada momento dos Jogos Olímpicos.",
        icon: <CursorArrowRaysIcon />,
      },
    ],
  };
  
  
  export {benefitOne, benefitTwo};
  