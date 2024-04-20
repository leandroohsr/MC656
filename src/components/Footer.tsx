import { Link } from "react-router-dom";
import imgLogoHome from "../assets/logo.png";
import React from "react";
import Container from "./container";

export default function Footer() {
    const navigation = [
        "Home",
        "Página 2",
        "Página 3",
        "Página 4",
        "Página 5",
      ];
    const routes = ["/", "/", "/"];
  return (
    <div className="relative -mt-20">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div>
              {" "}
              <Link to="/" className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <img
                      src={imgLogoHome}
                      alt="N"
                      width="32"
                      height="32"
                      className="w-8"
                    />
                  <span className="text-amber-500">Olimpíadas de París</span>
              </Link>
            </div>

            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
            </div>

            <div className="mt-5">
              <a
                href=""
                target="_blank"
                rel="noopener"
                className="relative block w-44">
                {/* <img
                  src=""
                  alt=""
                  width="212"
                  height="44"
                /> */}
              </a>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
            {navigation.map((item, index) => (
                      <Link key={index} to={routes[index]} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md hover:text-amber-500 focus:text-amber-500 focus:bg-gray-100 focus:outline-none">
                          {item}
                      </Link>
                    ))}
            </div>
          </div>
          <div>
            {/* <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link key={index} to="/" className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700">      
                    {item}
                </Link>
              ))}
            </div> */}
            <div className="text-gray-500">
                {/* <div>Dê uma estrela</div> */}
            <div className="flex mt-5 space-x-5 text-gray-400 focus:bg-amber-500">
                <a
                  href="https://github.com/leandroohsr/MC656"
                  target="_blank"
                  rel="noopener"
                  className="flex items-center space-x-2 text-gray-500">
                  <svg
                    role="img"
                    width="24"
                    height="24"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="">
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  <span>Dê uma estrela</span>
                </a>
            </div>
          </div>
          </div>

        </div>

        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
        Copyright © 2024 - 2024 · <span className="text-amber-500">Guia Olímpico de París</span>{" "} · Guia grátis produzidos pela melhor equipe da Unicamp
        </div>
      </Container>
      {/* Do not remove this */}

    </div>
  );
}