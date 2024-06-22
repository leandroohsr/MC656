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
    
        const rightBtn = screen.getByText("11 de Agosto"); //Pega o botao do dia 11 de agosto (limite direito)
        fireEvent.click(rightBtn); //Clica botao do limite direito

        var dirBtn = screen.getByTestId("setaDir"); //Pega o botao para o dia posterior ao dia 11
        expect(dirBtn.closest('button')).toBeDisabled() //Checa se ta desabilitado

    })
})