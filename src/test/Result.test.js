import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Result from "../page/Result";
import { MemoryRouter } from "react-router-dom";

describe("<Result />", () => {
  it("should render <Result /> correctly", () => {
    render(<Result />, { wrapper: MemoryRouter });

    expect(screen.getByText(/OFX Customer Rate/i)).toBeInTheDocument();
  });
});
