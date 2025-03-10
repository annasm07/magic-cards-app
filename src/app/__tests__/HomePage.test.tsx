import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "../page";
import { mockedCards } from "@/__mocks__/cards.mock";

const mockedFetchCards = jest.fn();

jest.mock("../../infra/card", () => ({
  fetchCards: () => mockedFetchCards,
}));

jest.mock("../useFilteredCards", () => {
  return {
    useFilteredCards: (searchTerm: string) => {
      return searchTerm ? [mockedCards[0]] : [];
    },
  };
});

describe("Home Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading state initially", async () => {
    await waitFor(() => {
      render(<Home />);
    });

    expect(screen.getByText(/Loading \.\.\./i)).toBeInTheDocument();
  });

  it("renders the error state when no cards are returned by the filter", async () => {
    render(<Home />);

    await waitFor(() => {
      expect(
        screen.getByText(/Sorry! No cards were found/i)
      ).toBeInTheDocument();
    });
  });

  it("renders the filtered cards successfully after data is fetched", async () => {
    render(<Home />);

    await waitFor(() => {
      expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
    });

    fireEvent.change(screen.getByPlaceholderText("Search..."), {
      target: { value: "Ancestor" },
    });

    await waitFor(() => {
      expect(screen.getByText("Ancestor's Chosen")).toBeInTheDocument();
      expect(screen.queryByText("Aven Cloudchaser")).not.toBeInTheDocument();
    });
  });
});
