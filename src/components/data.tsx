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
  import benefitTwoImg from "../assets/player.jpg";
  
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
    title: "Benefícios",
    desc: "",
    image: benefitTwoImg,
    bullets: [
      {
        title: "ArtHur",
        desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
        icon: <CalendarDaysIcon />,
      },
      {
        title: "ArtHur",
        desc: "Haaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        icon: <ChartBarSquareIcon />,
      },
      {
        title: "ArtHur",
        desc: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        icon: <CursorArrowRaysIcon />,
      },
    ],
  };
  
  
  export {benefitOne, benefitTwo};
  