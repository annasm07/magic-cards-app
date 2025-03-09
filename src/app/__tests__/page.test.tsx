import { render, screen, waitFor } from "@testing-library/react";
import Home from "../page";
import { mockedCards } from "@/__mocks__/cards.mock";

const mockedFetchCards = jest.fn();

jest.mock("../../infra/card", () => ({
  fetchCards: () => mockedFetchCards,
}));

jest.mock("../useFilteredCards", () => {
  return {
    useFilteredCards: () => {
      return [mockedCards[0]];
    },
  };
});

describe("Home Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading state initially", () => {
    mockedFetchCards.mockImplementation(() => new Promise(() => {}));

    render(<Home />);

    expect(screen.getByText(/Loading \.\.\./i)).toBeInTheDocument();
  });

  it("renders the filtered cards successfully after data is fetched", async () => {
    mockedFetchCards.mockResolvedValue({ cards: mockedCards });

    render(<Home />);

    await waitFor(() => {
      expect(screen.getByText("Ancestor's Chosen")).toBeInTheDocument();
      expect(screen.queryByText("Aven Cloudchaser")).not.toBeInTheDocument();
    });
  });
});
