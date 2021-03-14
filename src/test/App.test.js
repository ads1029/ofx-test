import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("<App />", () => {
  it("should render <App /> correctly", () => {
    render(<App />);

    expect(screen.getByText(/Quick Quote/i)).toBeInTheDocument();
  });
});
