import { render, screen, act, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { CalendarioPage } from "../pages/CalendarioPage";
import Papa from 'papaparse';

jest.requireActual('papaparse');
jest.requireActual('react');

describe("register", () => {
    it("Tem q renderizar os modals dos dias corretamente", async () => {
    
        render(<CalendarioPage/>);
    
        const meanBtn = screen.getByText("03 de Agosto"); //Pega o botao do dia 03 de agosto (botao do meio)
        fireEvent.click(meanBtn); //Clica botao do meio

        expect(screen.getByText("03 de Agosto Eventos:")); //Checa se abriu o modal

        var dirBtn = screen.getByTestId("setaDir"); //Pega o botao para o dia posterior ao dia 3 (seta direita)
        fireEvent.click(dirBtn); //Clica botao seta direita

        expect(screen.getByText("04 de Agosto Eventos:")); //Checa a passagem de dias

        var esqBtn = screen.getByTestId("setaEsq"); //Pega o botao para o dia anterior ao dia 4 (seta esquerda)
        fireEvent.click(esqBtn); //Clica botao seta esquerda

        expect(screen.getByText("03 de Agosto Eventos:")); //Checa a passagem de dias

        esqBtn = screen.getByTestId("setaEsq"); //Pega o botao para o dia anterior ao dia 3 (seta esquerda)
        fireEvent.click(esqBtn); //Clica botao seta esquerda

        expect(screen.getByText("02 de Agosto Eventos:")); //Checa a passagem de dias

    })
})