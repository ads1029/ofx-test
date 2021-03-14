import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Quote from "../page/Quote";
import { MemoryRouter } from "react-router-dom";

describe("<Quote />", () => {
  it("should render <Quote /> correctly", () => {
    render(<Quote />, { wrapper: MemoryRouter });

    expect(screen.getByText(/First Name/i)).toBeInTheDocument();
  });
});
