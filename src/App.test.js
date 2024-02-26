import { render, screen } from "@testing-library/react";
import App from "./App";

test("App should have MainPage compoenent mounted", ()=>{
    render(<App/>)
    const testComponent = screen.getByRole('MainPage')
    expect(testComponent).toBeInTheDocument()
})