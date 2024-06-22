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
    
        const leftBtn = screen.getByText("24 de Julho"); //Pega o botao do dia 24 de julho (limite esquerdo)
        fireEvent.click(leftBtn); //Clica botao do limite esquerdo

        var esqBtn = screen.getByTestId("setaEsq"); //Pega o botao para o dia anterior ao dia 24
        expect(esqBtn.closest('button')).toBeDisabled() //Checa se ta desabilitado

    })
})