
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import imgLogoHome from "../assets/logo.png";
const Navbar = () => {
  const navigation = [
    "Home",
    "Página 2",
    "Página 3",
    "Página 4",
    "Página 5",
  ];
  
  const routes = ["/login", "/home", "/"];
  
  return (
    <div className="w-full bg-black">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link  className="flex " to="/">
                  <div className="w-6 mr-4 -ml-20"> 
                    <img src={imgLogoHome} alt="Logo" />
                  </div>
                  <span className="flex items-center space-x-2 text-2xl font-medium dark:text-gray-100">
                    {/* <span>
                      <img
                        src=""
                        alt=""
                        width="64"
                        height="64"
                        className="w-24"
                      />
                    </span> */}
                    <span className="text-white">Olimpíadas de París</span>
                  </span>
                </Link> 

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-amber-500 focus:text-amber-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                {/* menu que aparece apenas quando a tela está pequena  */}
                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} to={routes[index]} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:focus:bg-gray-800 focus:outline-none">
                          {item}
                          {index}
                      </Link>
                    ))}
                    <Link to="/" className="w-full px-6 py-2 mt-3 text-center text-white rounded-md bg-amber-500 lg:ml-5">         
                        Login
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>


        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link to={routes[index]}  className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-amber-500 focus:text-amber-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link to="/login" className="px-6 py-2 font-medium text-white rounded-md bg-amber-500 md:ml-5 hover:text-black">
              Login
          </Link>
          <Link to="/login" className="px-6 py-2 font-medium border-2 border-yellow-600 rounded-md text-amber-500 md:ml-5 hover:text-white">
              Cadastrar
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;