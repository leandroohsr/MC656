import { render, screen, act } from "@testing-library/react";
import { TimerPage } from "../pages/TimerPage";

describe("timer", () => {
    jest.useFakeTimers().setSystemTime(new Date('2024-07-27'));;
    it("Tem que aparecer a frase correta ('Olimpiadas ja comecaram')", () => {
    
        render(<TimerPage/>);
    
        act(() => {
            jest.advanceTimersByTime(2000);
        });
    
        expect(screen.getByText('As olimpíadas já começaram, verifique o calendário!'));
    })
})