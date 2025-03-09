import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  it("renders the app heading", () => {
    render(<Header />);

    expect(screen.getByText(/Magic Cards APP/i)).toBeVisible();
  });
});
