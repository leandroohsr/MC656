import Navbar from "../components/NavBar";
import Hero from "../components/Hero";
export const HomePage = () => {
    return (
        <>
        <Navbar />
        <Hero />
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
        </>
    );
}