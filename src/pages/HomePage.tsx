import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
import SectionTitle from "../components/sectionTitle";
import Benefits from "../components/Beneficios";
import { benefitOne } from "../components/data";
import { benefitTwo } from "../components/data";
export const HomePage = () => {
    return (
        <>
        <Navbar />
        <Hero />
        {/* <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1> */}
        <div className="bg-white">
            <SectionTitle
                pretitle=""
                title="Olimpíadas de Paris 2024: tudo o que você precisa saber"
                className="text-black">
                    Esse guia oferece uma variedade de recursos úteis e informativos para os espectadores das Olimpíadas de Paris. Você encontrará tudo o que precisa para aproveitar ao máximo os Jogos Olímpicos.
            </SectionTitle>

        </div>
        <div className="bg-white">
            <Benefits data={benefitOne} />
        </div>
        <div className="bg-black">
            <Benefits imgPos="right" data={benefitTwo} />
        </div>

        </>
    );
}