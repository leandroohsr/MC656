import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { Script } from "vm";
export{}

export const CalendarioPage = () => {
    
    const[showPopup, setShowPopup] = useState(false);
    
    function alternPopup(str:string, info: string, loc: string, time:string){
        if (document.getElementById("default-modal")!.style.display === "block") {
            document.getElementById("default-modal")!.style.display = "none";
        }
        else {
            document.getElementById("default-modal")!.style.display = "block";
        }
        document.getElementById("titulo")!.textContent = str;
        document.getElementById("info")!.textContent = info;
        document.getElementById("loc")!.textContent = loc;
        document.getElementById("time")!.textContent = time;
    }
    
    return (
            <div className="grid grid-cols-7 h-screen">
                <div id="default-modal" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full hidden">
                        <div className="grid grid-cols-2 h-screen">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 id= "titulo" className="text-xl font-semibold text-gray-900 dark:text-white">
                                    </h3>
                                    <button onClick= {() => alternPopup("", "", "", "")}type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                <div className="grid grid-cols-3 h-screen">
                                    <p id = "info" className="text-base leading-relaxed text-gray-500 dark:text-white">
                                    </p>
                                    <p id = "loc"className="text-base leading-relaxed text-gray-500 dark:text-white">
                                    </p>
                                    <p id = "time" className="text-base leading-relaxed text-gray-500 dark:text-white">
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                <button onClick= {() => alternPopup("26 de Julho", "Natação 100m", "Paris", "15:30 GMT-3")} className="border border-black text-black"> Dia 1</button>
                <button onClick= {() => alternPopup("27 de Julho", "Natação 200m", "Paris", "14:30 GMT-3")} className="border border-black text-black"> Dia 2</button>
                <button onClick= {() => alternPopup("28 de Julho", "Salto à Distância", "Nice", "13:30 GMT-3")} className="border border-black text-black"> Dia 3</button>
                <button onClick= {() => alternPopup("29 de Julho", "Lançamento de Peso", "Versalhes", "12:30 GMT-3")} className="border border-black text-black"> Dia 4</button>
                <button onClick= {() => alternPopup("30 de Julho", "Futebol", "Versalhes", "11:30 GMT-3")} className="border border-black text-black"> Dia 5</button>
                <button onClick= {() => alternPopup("31 de Julho", "Sinuca", "Paris", "15:30 GMT-3")} className="border border-black text-black"> Dia 6</button>
                <button onClick= {() => alternPopup("01 de Agosto", "Golf", "Paris", "1:30 GMT-3")} className="border border-black text-black"> Dia 7</button>
                <button onClick= {() => alternPopup("02 de Agosto", "Tênis de Mesa", "Paris", "20:30 GMT-3")} className="border border-black text-black"> Dia 8</button>
                <button onClick= {() => alternPopup("03 de Agosto", "Esgrima", "Nice", "15:30 GMT-3")} className="border border-black text-black"> Dia 9</button>
                <button onClick= {() => alternPopup("04 de Agosto", "Basquete", "Paris", "15:30 GMT-3")} className="border border-black text-black"> Dia 10</button>
                <button onClick= {() => alternPopup("05 de Agosto", "Bocha", "Versalhes", "15:30 GMT-3")} className="border border-black text-black"> Dia 11</button>
                <button onClick= {() => alternPopup("06 de Agosto", "Skate", "Nice", "1:30 GMT-3")} className="border border-black text-black"> Dia 12</button>
                <button onClick= {() => alternPopup("07 de Agosto", "Breaking Dancing", "Nice", "15:30 GMT-3")} className="border border-black text-black"> Dia 13</button>
                <button onClick= {() => alternPopup("08 de Agosto", "Karatê", "Paris", "0:30 GMT-3")} className="border border-black text-black"> Dia 14</button>
                <button onClick= {() => alternPopup("09 de Agosto", "Surf", "Versalhes", "10:30 GMT-3")} className="border border-black text-black"> Dia 15</button>
                <button onClick= {() => alternPopup("10 de Agosto", "Tênis", "Paris", "15:30 GMT-3")} className="border border-black text-black"> Dia 16</button>
                <button onClick= {() => alternPopup("11 de Agosto", "Ginástica Artística", "Paris", "15:30 GMT-3")} className="border border-black text-black"> Dia 17</button>
                <button onClick= {() => alternPopup("12 de Agosto", "Caiaque", "Nice", "5:30 GMT-3")} className="border border-black text-black"> Dia 18</button>
                <button onClick= {() => alternPopup("13 de Agosto", "Salto em Altura", "Versalhes", "15:30 GMT-3")} className="border border-black text-black"> Dia 19</button>
            </div>
    );
}

