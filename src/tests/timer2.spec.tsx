import { render, screen, act } from "@testing-library/react";
import { TimerPage } from "../pages/TimerPage";

describe("timer", () => {
    jest.useFakeTimers().setSystemTime(new Date('2024-8-12'));;
    it("Tem que aparecer a frase correta ('Para as olimpíadas de LA 2028')", () => {
    
        render(<TimerPage/>);
    
        act(() => {
            jest.advanceTimersByTime(2000);
        });
    
        expect(screen.getByText('Para as olimpíadas de Los Angeles 2028!'));
    })
})