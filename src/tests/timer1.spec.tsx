import { render, screen, act } from "@testing-library/react";
import { TimerPage } from "../pages/TimerPage";

describe("timer", () => {
    jest.useFakeTimers().setSystemTime(new Date('2024-01-21'));
    it("Tem que aparecer a frase correta ('Para as olimpíadas de Paris 2024')", () => {
    
        render(<TimerPage/>);
    
        act(() => {
            jest.advanceTimersByTime(2000);
        });
    
        expect(screen.getByText('Para as olimpíadas de Paris 2024!'));
    })
})