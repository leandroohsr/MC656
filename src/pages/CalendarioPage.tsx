import { useState } from "react";
import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  CalendarDaysIcon,
  CalendarIcon,
  ArrowLeftIcon
} from "@heroicons/react/24/solid";

export const CalendarioPage = () => {

  const [showPopup, setShowPopup] = useState(false);

  const [formState1, setFormState1] = useState({ hour: '15:30', text: 'Masculino - Grupo C', place: 'Parc des Princes', icon: <CalendarDaysIcon /> });
  const [formState2, setFormState2] = useState({ hour: '15:00', text: 'Masculino - Grupo B', place: 'Estádio Geoffroy-Guichard', icon: <CalendarDaysIcon /> });
  const [formState3, setFormState3] = useState({ hour: '17:00', text: 'Masculino - Grupo C', place: 'Estádio La Beaujoire', icon: <CalendarDaysIcon /> });
  const [formState4, setFormState4] = useState({ hour: '21:00', text: 'Masculino - Grupo D', place: 'Parc des Princes', icon: <CalendarDaysIcon /> });
  const [formState5, setFormState5] = useState({ hour: '14:00', text: 'Feminino - Grupo A', place: 'Estádio Old Trafford', icon: <CalendarDaysIcon /> });
  const [formState6, setFormState6] = useState({ hour: '16:30', text: 'Feminino - Grupo B', place: 'Estádio Parc Olympique Lyonnais', icon: <CalendarDaysIcon /> });
  const [formState7, setFormState7] = useState({ hour: '19:00', text: 'Feminino - Grupo C', place: 'Estádio San Mamés', icon: <CalendarDaysIcon /> });
  const [formState8, setFormState8] = useState({ hour: '21:30', text: 'Feminino - Grupo D', place: 'Estádio Allianz Riviera', icon: <CalendarDaysIcon /> });
  const [formState9, setFormState9] = useState({ hour: '15:00', text: 'Masculino - Grupo A', place: 'Estádio Wembley', icon: <CalendarDaysIcon /> });
  const [formState10, setFormState10] = useState({ hour: '17:30', text: 'Masculino - Grupo B', place: 'Estádio Johan Cruyff Arena', icon: <CalendarDaysIcon /> });


  const arrays = [
    [formState1, formState2, formState3, formState4], //24 de Julho
    [formState2, formState3], //25 de Julho
    [formState1, formState3], //26 de Julho
    [],                       //27 de Julho
    [],                       //28 de Julho
    [],                       //29 de Julho
    [],                       //30 de Julho
    [],                       //31 de Julho
    [],                       //01 de Agosto
    [],                       //02 de Agosto
    [],                       //03 de Agosto
    [],                       //04 de Agosto
    [],                       //05 de Agosto
    [],                       //06 de Agosto
    [],                       //07 de Agosto
    [],                       //08 de Agosto
    [],                       //09 de Agosto
    [],                       //10 de Agosto
    [],                       //11 de Agosto
  ];

  const arrays_sports = [
    []
  ]

  const dias = [
    "24 de Julho",
    "25 de Julho",
    "26 de Julho",
    "27 de Julho",
    "28 de Julho",
    "29 de Julho",
    "30 de Julho",
    "01 de Agosto",
    "02 de Agosto",
    "03 de Agosto",
    "04 de Agosto",
    "05 de Agosto",
    "06 de Agosto",
    "07 de Agosto",
    "08 de Agosto",
    "09 de Agosto",
    "10 de Agosto",
    "11 de Agosto",
  ];

  function alternPopup(str: string, info: string, loc: string, time: string) {
    if (document.getElementById("default-modal")!.style.display === "block") {
      document.getElementById("default-modal")!.style.display = "none";
    }
    else {
      document.getElementById("default-modal")!.style.display = "block";
    }

  }
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePopUp(index: number) {
    setShowPopup(true);
    setCurrentIndex(index);

  }

  function voltarDia(){
    if(currentIndex>0){
      setCurrentIndex(currentIndex - 1)
    }
  }
  function avancarDia(){
    if (currentIndex<17){
      setCurrentIndex(currentIndex + 1)
    }
  }

  return (
    <body className="bg-gray-200">
      {showPopup == true ?
        <div id="default-modal" aria-hidden="true" className="fixed flex items-center justify-center w-full h-full max-h-full overflow-x-hidden overflow-y-auto bg-opacity-50 md:inset-0">
          <div className="w-full max-w-md max-h-full p-4 ">

            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

              <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 dark:border-gray-600">
                <button onClick={voltarDia} title={currentIndex === 0 ? 'Este é o primeiro dia' : 'Voltar um dia'} className={`flex-shrink-0 text-4xl ${currentIndex === 0 ? 'text-gray-300 opacity-50' : ''}`} disabled={currentIndex === 0}>&lt;</button>
                <h3 className="flex-grow text-lg font-semibold text-center text-gray-900 dark:text-white">
                  {dias[currentIndex]}
                </h3>
                <button onClick={avancarDia} title={currentIndex === 17 ? 'Este é o último dia' : 'Avançar um dia'} className={`flex-shrink-0 text-4xl ${currentIndex === 17 ? 'text-gray-300 opacity-50' : ''}`} disabled={currentIndex === 17}>&gt;</button>
                <button onClick={() => setShowPopup(false)} type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5">
                <p className="mb-4 text-gray-500 dark:text-gray-400">Programação das competições olímpicas:</p>
                <ul className="mb-4 space-y-4">
                  <div>
                    {arrays[currentIndex].map((item, index) => (
                      <li>
                        <label className="inline-flex items-center justify-between w-full p-5 mb-4 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
                          <div className="block">
                            <div className="w-full text-lg font-semibold">{item.text}</div>
                            <div className="w-full text-gray-500 dark:text-gray-400">{item.hour}</div>
                            <div className="w-full text-gray-500 dark:text-gray-400">{item.place}</div>
                          </div>
                          <div className="w-4 h-4 text-gray-500 ms-3 rtl:rotate-180 dark:text-gray-400" aria-hidden="true">{item.icon}</div>

                        </label>
                      </li>
                    ))}
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div> : null}
        <div onClick={()=>{        window.location.href = '/';}} className="flex w-16 ml-4 rounded-lg shadow-lg hover:underline ">
          <ArrowLeftIcon />
        </div>
      <div className="container pt-10 mx-auto bg-gray-200 pb-96">

        <div className="w-full bg-white rounded shadow wrapper ">
          <div className="flex justify-center p-2 border-b header">
            <span className="text-lg font-bold text-amber-700">
              CALENDÁRIO OLIMPÍADAS 2024
            </span>
            <div className="buttons">
              <button className="p-1">
              </button>
              <button className="p-1">
              </button>
            </div>
          </div>
          <table className="w-full shadow-lg">

            <tbody className="">
              <tr className="h-20 text-center">
                <td onClick={() => handlePopUp(0)} className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg shadow-lg">
                    <span className="font-bold text-gray-500 ">{dias[0]}</span>
                      <div className="w-full h-full ">
                        <div className="grid grid-cols-4 gap-4 m-4">
                          <div className=""><CalendarDaysIcon /></div>
                          <div><SunIcon /></div>
                          <div><AdjustmentsHorizontalIcon /></div>
                          <div><DevicePhoneMobileIcon /></div>
                          <div><CursorArrowRaysIcon /></div>
                          <div><CalendarDaysIcon /></div>
                          <div><FaceSmileIcon /></div>
                          <div><CalendarDaysIcon /></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td onClick={() => handlePopUp(1)} className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg shadow-lg">
                      <span className="font-bold text-gray-500">{dias[1]}</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg shadow-lg">
                      <span className="font-bold text-gray-500">{dias[2]}</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg shadow-lg">
                      <span className="font-bold text-gray-500">{dias[3]}</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg shadow-lg">
                      <span className="font-bold text-gray-500">{dias[4]}</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-hidden transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg shadow-lg">
                      <span className="font-bold text-gray-500">{dias[5]}</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30">
                    </div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg shadow-lg">
                      <span className="text-sm font-bold text-gray-500">{dias[6]}</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
              </tr>




              <tr className="h-20 text-center ">
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg shadow-lg">
                      <span className="font-bold text-gray-500">{dias[7]}</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg shadow-lg">
                      <span className="font-bold text-gray-500">{dias[8]}</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg shadow-lg">
                      <span className="font-bold text-gray-500">{dias[9]}</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg shadow-lg">
                      <span className="font-bold text-gray-500">{dias[10]}</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg shadow-lg">
                      <span className="font-bold text-gray-500">{dias[11]}</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg shadow-lg">
                      <span className="font-bold text-gray-500">{dias[12]}</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg shadow-lg">
                      <span className="text-sm font-bold text-gray-500">{dias[13]}</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
              </tr>

              <tr className="h-20 text-center">
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg shadow-lg">
                      <span className="font-bold text-gray-500">{dias[14]}</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg shadow-lg">
                      <span className="font-bold text-gray-500">{dias[15]}</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg shadow-lg">
                      <span className="font-bold text-gray-500">{dias[16]}</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg shadow-lg">
                      <span className="font-bold text-gray-500">{dias[17]}</span>
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