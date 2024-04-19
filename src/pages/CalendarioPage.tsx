import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { Script } from "vm";
export{}

export const CalendarioPage = () => {
    
    const[showPopup, setShowPopup] = useState(false);
    
    function alternPopup(str:string){
        setShowPopup(!showPopup);
        document.getElementById("default-modal")!.style.display = "block";
        document.getElementById("titulo")!.textContent = str;
    }
    
    return (
            <div className="grid grid-cols-7 h-screen">
                <button className="border border-black text-black"> Dia 1</button>
                <button onClick= {() => alternPopup("testando")} className="border border-black text-black"> Dia 2</button>
                
                <div id="default-modal" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full hidden">
                        <div className="grid grid-cols-2 h-screen">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 id= "titulo" className="text-xl font-semibold text-gray-900 dark:text-white">
                                        27 de Julho
                                    </h3>
                                    <button onClick= {() => alternPopup("")}type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                                <div className="grid grid-cols-3 h-screen">
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-white">
                                        Natação - 100m lires
                                    </p>
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-white">
                                        Paris
                                    </p>
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-white">
                                        15:30 BRT GMT-3
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                <button className="border border-black text-black"> Dia 3</button>
                <button className="border border-black text-black"> Dia 4</button>
                <button className="border border-black text-black"> Dia 5</button>
                <button className="border border-black text-black"> Dia 6</button>
                <button className="border border-black text-black"> Dia 7</button>
                <button className="border border-black text-black"> Dia 8</button>
                <button className="border border-black text-black"> Dia 9</button>
                <button className="border border-black text-black"> Dia 10</button>
                <button className="border border-black text-black"> Dia 11</button>
                <button className="border border-black text-black"> Dia 12</button>
                <button className="border border-black text-black"> Dia 13</button>
                <button className="border border-black text-black"> Dia 14</button>
                <button className="border border-black text-black"> Dia 15</button>
                <button className="border border-black text-black"> Dia 16</button>
                <button className="border border-black text-black"> Dia 17</button>
                <button className="border border-black text-black"> Dia 18</button>
                <button className="border border-black text-black"> Dia 19</button>
            </div>
    );
}

