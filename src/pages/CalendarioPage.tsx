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
            // <div className="grid grid-cols-7 h-screen">
            //     <div id="default-modal" aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full hidden">
            //             <div className="grid grid-cols-2 h-screen">
            //                 <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            //                     <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            //                         <h3 id= "titulo" className="text-xl font-semibold text-gray-900 dark:text-white"/>
            //                         <button onClick= {() => alternPopup("", "", "", "")}type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
            //                             <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            //                                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            //                             </svg>
            //                             <span className="sr-only">Close modal</span>
            //                         </button>
            //                     </div>
            //                     <div className="grid grid-cols-3 h-screen">
            //                         <p id = "info" className="text-base leading-relaxed text-gray-500 dark:text-white"/>
            //                         <p id = "loc"className="text-base leading-relaxed text-gray-500 dark:text-white"/>
            //                         <p id = "time" className="text-base leading-relaxed text-gray-500 dark:text-white"/>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     <button onClick= {() => alternPopup("26 de Julho", "Natação 100m", "Paris", "15:30 GMT-3")} className="border border-black text-black"> Dia 1</button>
            //     <button onClick= {() => alternPopup("27 de Julho", "Natação 200m", "Paris", "14:30 GMT-3")} className="border border-black text-black"> Dia 2</button>
            //     <button onClick= {() => alternPopup("28 de Julho", "Salto à Distância", "Nice", "13:30 GMT-3")} className="border border-black text-black"> Dia 3</button>
            //     <button onClick= {() => alternPopup("29 de Julho", "Lançamento de Peso", "Versalhes", "12:30 GMT-3")} className="border border-black text-black"> Dia 4</button>
            //     <button onClick= {() => alternPopup("30 de Julho", "Futebol", "Versalhes", "11:30 GMT-3")} className="border border-black text-black"> Dia 5</button>
            //     <button onClick= {() => alternPopup("31 de Julho", "Sinuca", "Paris", "15:30 GMT-3")} className="border border-black text-black"> Dia 6</button>
            //     <button onClick= {() => alternPopup("01 de Agosto", "Golf", "Paris", "1:30 GMT-3")} className="border border-black text-black"> Dia 7</button>
            //     <button onClick= {() => alternPopup("02 de Agosto", "Tênis de Mesa", "Paris", "20:30 GMT-3")} className="border border-black text-black"> Dia 8</button>
            //     <button onClick= {() => alternPopup("03 de Agosto", "Esgrima", "Nice", "15:30 GMT-3")} className="border border-black text-black"> Dia 9</button>
            //     <button onClick= {() => alternPopup("04 de Agosto", "Basquete", "Paris", "15:30 GMT-3")} className="border border-black text-black"> Dia 10</button>
            //     <button onClick= {() => alternPopup("05 de Agosto", "Bocha", "Versalhes", "15:30 GMT-3")} className="border border-black text-black"> Dia 11</button>
            //     <button onClick= {() => alternPopup("06 de Agosto", "Skate", "Nice", "1:30 GMT-3")} className="border border-black text-black"> Dia 12</button>
            //     <button onClick= {() => alternPopup("07 de Agosto", "Breaking Dancing", "Nice", "15:30 GMT-3")} className="border border-black text-black"> Dia 13</button>
            //     <button onClick= {() => alternPopup("08 de Agosto", "Karatê", "Paris", "0:30 GMT-3")} className="border border-black text-black"> Dia 14</button>
            //     <button onClick= {() => alternPopup("09 de Agosto", "Surf", "Versalhes", "10:30 GMT-3")} className="border border-black text-black"> Dia 15</button>
            //     <button onClick= {() => alternPopup("10 de Agosto", "Tênis", "Paris", "15:30 GMT-3")} className="border border-black text-black"> Dia 16</button>
            //     <button onClick= {() => alternPopup("11 de Agosto", "Ginástica Artística", "Paris", "15:30 GMT-3")} className="border border-black text-black"> Dia 17</button>
            //     <button onClick= {() => alternPopup("12 de Agosto", "Caiaque", "Nice", "5:30 GMT-3")} className="border border-black text-black"> Dia 18</button>
            //     <button onClick= {() => alternPopup("13 de Agosto", "Salto em Altura", "Versalhes", "15:30 GMT-3")} className="border border-black text-black"> Dia 19</button>
            // </div>
            <body className="bg-gray-200">
            <div className="container mx-auto pt-10 bg-gray-200 pb-96">
            <div className="w-full bg-white rounded shadow wrapper">
              <div className="flex justify-center p-2 border-b header">
                <span className="text-lg font-bold">
                  2024
                </span>
                <div className="buttons">
                  <button className="p-1">
                      {/* <svg width="1em" fill="gray" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path fill-rule="evenodd" d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"/>
                        <path fill-rule="evenodd" d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"/>
                      </svg> */}
                  </button>
                  <button className="p-1">
                      {/* <svg width="1em" fill="gray" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path fill-rule="evenodd" d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>
                        <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
                      </svg> */}
                  </button>
                </div>
              </div>
              <table className="w-full">

                <tbody className="">
                <tr className="h-20 text-center">
                    <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease ">
                      <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                        <div className="w-full h-full bg-gray-200 rounded-lg">
                          <span className="text-gray-500">24 de julho</span>
                        </div>
                        <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                      </div>
                    </td>
                    <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease ">
                      <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                        <div className="w-full h-full bg-gray-200 rounded-lg">
                          <span className="text-gray-500">25 de julho</span>
                        </div>
                        <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                      </div>
                    </td>
                    <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease ">
                      <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                        <div className="w-full h-full bg-gray-200 rounded-lg">
                          <span className="text-gray-500">26 de julho</span>
                        </div>
                        <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                      </div>
                    </td>
                    <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease ">
                      <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                        <div className="w-full h-full bg-gray-200 rounded-lg">
                          <span className="text-gray-500">27 de julho</span>
                        </div>
                        <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                      </div>
                    </td>
                    <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease ">
                      <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                        <div className="w-full h-full bg-gray-200 rounded-lg">
                          <span className="text-gray-500">28 de julho</span>
                        </div>
                        <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                      </div>
                    </td>
                    <td className="w-10 h-40 p-1 overflow-hidden transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease ">
                      <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                        <div className="w-full h-full bg-gray-200 rounded-lg">
                          <span className="text-gray-500">29 de julho</span>
                        </div>
                        <div className="flex-grow w-full py-1 cursor-pointer bottom h-30">
                        </div>
                      </div>
                    </td>
                    <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease ">
                      <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                        <div className="w-full h-full bg-gray-200 rounded-lg">
                          <span className="text-sm text-gray-500">30 de julho</span>
                        </div>
                        <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                      </div>
                    </td>
                  </tr>
        

                  <tr className="h-20 text-center">
                    <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease ">
                      <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                        <div className="w-full h-full bg-gray-200 rounded-lg">
                          <span className="text-gray-500">31 de julho</span>
                        </div>
                        <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                      </div>
                    </td>
                    <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease ">
                      <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                        <div className="w-full h-full bg-gray-200 rounded-lg">
                          <span className="text-gray-500">01 de agosto</span>
                        </div>
                        <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                      </div>
                    </td>
                    <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease ">
                      <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                        <div className="w-full h-full bg-gray-200 rounded-lg">
                          <span className="text-gray-500">02 de agosto</span>
                        </div>
                        <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                      </div>
                    </td>
                    <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease ">
                      <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                        <div className="w-full h-full bg-gray-200 rounded-lg">
                          <span className="text-gray-500">03 de agosto</span>
                        </div>
                        <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                      </div>
                    </td>
                    <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease ">
                      <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                        <div className="w-full h-full bg-gray-200 rounded-lg">
                          <span className="text-gray-500">04 de agosto</span>
                        </div>
                        <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                      </div>
                    </td>
                    <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease ">
                      <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                        <div className="w-full h-full bg-gray-200 rounded-lg">
                          <span className="text-gray-500">05 de agosto</span>
                        </div>
                        <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                      </div>
                    </td>
                    <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease ">
                      <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                        <div className="w-full h-full bg-gray-200 rounded-lg">
                          <span className="text-sm text-gray-500">06 de agosto</span>
                        </div>
                        <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                      </div>
                    </td>
                  </tr>

                  <tr className="h-20 text-center">
                    <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease ">
                      <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                        <div className="w-full h-full bg-gray-200 rounded-lg">
                          <span className="text-gray-500">07 de agosto</span>
                        </div>
                        <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                      </div>
                    </td>
                    <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease ">
                      <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                        <div className="w-full h-full bg-gray-200 rounded-lg">
                          <span className="text-gray-500">08 de agosto</span>
                        </div>
                        <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                      </div>
                    </td>
                    <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease ">
                      <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                        <div className="w-full h-full bg-gray-200 rounded-lg">
                          <span className="text-gray-500">09 de agosto</span>
                        </div>
                        <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                      </div>
                    </td>
                    <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease ">
                      <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                        <div className="w-full h-full bg-gray-200 rounded-lg">
                          <span className="text-gray-500">10 de agosto</span>
                        </div>
                        <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                      </div>
                    </td>
                    <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease ">
                      <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                        <div className="w-full h-full bg-gray-200 rounded-lg">
                          <span className="text-gray-500">11 de agosto</span>
                        </div>
                        <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          </body>
    );
}

