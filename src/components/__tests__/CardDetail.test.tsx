import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CardDetail from "../CardDetail";
import { mockedCards } from "@/__mocks__/cards.mock";

describe("CardDetail", () => {
  it("renders the card details", () => {
    render(<CardDetail card={mockedCards[0]} />);

    expect(screen.getByText("Ancestor's Chosen")).toBeVisible();
    expect(screen.getByText(/Mana Cost:/i)).toBeVisible();
    expect(screen.getByText(/This creature deals combat /i)).toBeVisible();
  });
});
