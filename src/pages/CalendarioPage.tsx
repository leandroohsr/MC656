import { eventWrapper } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import { Script } from "vm";
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

export const CalendarioPage = () => {

  const [showPopup, setShowPopup] = useState(false);

  const [formState1, setFormState1] = useState({ hour: '15:30', text: 'Masculino - Grupo C', place: 'Parc des Princes', icon: <CalendarDaysIcon />});
  const [formState2, setFormState2] = useState({ hour: '15:00', text: 'Masculino - Grupo B', place: 'Estádio Geoffroy-Guichard', icon: <CalendarDaysIcon /> });
  const [formState3, setFormState3] = useState({ hour: '17:00', text: 'Masculino - Grupo C', place: 'Estádio La Beaujoire' , icon: <CalendarDaysIcon />});
  const [formState4, setFormState4] = useState({ hour: '21:00', text: 'Masculino - Grupo D', place: 'Parc des Princes', icon: <CalendarDaysIcon /> });
  const [formState5, setFormState5] = useState({ hour: '14:00', text: 'Feminino - Grupo A', place: 'Estádio Old Trafford', icon: <CalendarDaysIcon /> });
  const [formState6, setFormState6] = useState({ hour: '16:30', text: 'Feminino - Grupo B', place: 'Estádio Parc Olympique Lyonnais', icon: <CalendarDaysIcon /> });
  const [formState7, setFormState7] = useState({ hour: '19:00', text: 'Feminino - Grupo C', place: 'Estádio San Mamés', icon: <CalendarDaysIcon /> });
  const [formState8, setFormState8] = useState({ hour: '21:30', text: 'Feminino - Grupo D', place: 'Estádio Allianz Riviera', icon: <CalendarDaysIcon /> });
  const [formState9, setFormState9] = useState({ hour: '15:00', text: 'Masculino - Grupo A', place: 'Estádio Wembley', icon: <CalendarDaysIcon /> });
  const [formState10, setFormState10] = useState({ hour: '17:30', text: 'Masculino - Grupo B', place: 'Estádio Johan Cruyff Arena', icon: <CalendarDaysIcon /> });


  const arrays = [
    [formState1, formState2, formState3, formState4], //24 de Junho
    [formState2, formState3], //25 de Junho
    [formState1, formState3], //26 de Junho
  ];

  const dias = [
    "24 de Junho",
    "25 de Junho",
    "26 de Junho",
    "27 de Junho",
    "28 de Junho",
    "29 de Junho",
    "30 de Junho",
    "1 de Julho",
    "2 de Julho",
    "3 de Julho",
    "4 de Julho",
    "5 de Julho",
    "6 de Julho",
    "7 de Julho",
    "8 de Julho",
    "9 de Julho",
    "10 de Julho",
    "11 de Julho",
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

  return (
    <body className="bg-gray-200">
      {showPopup == true ?
        <div  id="default-modal" aria-hidden="true" className="fixed flex items-center justify-center w-full h-full max-h-full overflow-x-hidden overflow-y-auto md:inset-0">
          <div className="w-full max-w-md max-h-full p-4 ">

            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

              <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {dias[currentIndex]}
                </h3>
                <button onClick={() => setShowPopup(false)} type="button" className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5">
                <p className="mb-4 text-gray-500 dark:text-gray-400">Select your desired position:</p>
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
                  {/* <li>
                    <label className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
                      <div className="block">
                        <div className="w-full text-lg font-semibold">UI/UX Engineer</div>
                        <div className="w-full text-gray-500 dark:text-gray-400">Flowbite</div>
                      </div>
                      <svg className="w-4 h-4 text-gray-500 ms-3 rtl:rotate-180 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" /></svg>
                    </label>
                  </li>
                  <li>
                    <label className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
                      <div className="block">
                        <div className="w-full text-lg font-semibold">React Developer</div>
                        <div className="w-full text-gray-500 dark:text-gray-400">Alphabet</div>
                      </div>
                      <svg className="w-4 h-4 text-gray-500 ms-3 rtl:rotate-180 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" /></svg>
                    </label>
                  </li>
                  <li>
                    <label className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
                      <div className="block">
                        <div className="w-full text-lg font-semibold">Full Stack Engineer</div>
                        <div className="w-full text-gray-500 dark:text-gray-400">Apple</div>
                      </div>
                      <svg className="w-4 h-4 text-gray-500 ms-3 rtl:rotate-180 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" /></svg>
                    </label>
                  </li> */}
                </ul>
                <button className="text-white inline-flex w-full justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Next step
                </button>
              </div>
            </div>
          </div>
        </div> : null}
      <div className="container p-10 mx-auto">
        <div className="w-full bg-white rounded shadow wrapper ">
          <div className="flex justify-center justify-between p-2 border-b header">
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
              <tr className="h-20 text-center border-2 border-white rounded-lg">
                <td onClick={() => handlePopUp(0)} className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-2 border-white rounded-lg cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden bg-gray-200 rounded-lg xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full rounded-lg">
                      <span className="text-gray-500">1</span>
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
                  </div>
                </td>
                <td onClick={() => handlePopUp(1)} className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">2</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">3</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">4</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">6</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-hidden transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">7</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30">
                    </div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-sm text-gray-500">8</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
              </tr>


              <tr className="h-20 text-center">
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">9</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">10</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">12</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">13</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">14</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">15</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-sm text-gray-500">16</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
              </tr>

              <tr className="h-20 text-center">
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">16</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">17</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">18</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">19</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">20</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">21</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-sm text-gray-500">22</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
              </tr>

              <tr className="h-20 text-center">
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">23</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">24</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">25</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">26</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">27</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">28</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-sm text-gray-500">29</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
              </tr>

              <tr className="h-20 text-center">
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">30</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">31</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 bg-gray-100 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">1</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 bg-gray-100 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">2</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 bg-gray-100 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">3</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 bg-gray-100 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-gray-500">4</span>
                    </div>
                    <div className="flex-grow w-full py-1 cursor-pointer bottom h-30"></div>
                  </div>
                </td>
                <td className="w-10 h-40 p-1 overflow-auto transition duration-500 bg-gray-100 border border-white cursor-pointer xl:w-40 lg:w-30 md:w-30 sm:w-20 ease hover:bg-gray-300">
                  <div className="flex flex-col w-10 h-40 mx-auto overflow-hidden xl:w-40 lg:w-30 md:w-30 sm:w-full">
                    <div className="w-full h-full bg-gray-200 rounded-lg">
                      <span className="text-sm text-gray-500">5</span>
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