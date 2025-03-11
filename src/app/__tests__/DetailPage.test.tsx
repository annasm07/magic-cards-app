import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import DetailPage from "../card/[id]/page";
import { mockedCards } from "@/__mocks__/cards.mock";
import { fetchCard } from "@/infra/card";

const mockedRouterBack = jest.fn();

jest.mock("../../infra/card", () => ({
  fetchCard: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    back: mockedRouterBack,
  }),
  usePathname: jest.fn(() => "/cards/5f8287b1-5bb6-5f4c-ad17-316a40d5bb0c"),
}));

jest.mock("../hooks/useDebouncedText", () => ({
  useDebouncedText: (text: string) => text,
}));

describe("DetailPage Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading state initially", async () => {
    (fetchCard as jest.Mock).mockImplementation(() => new Promise(() => {}));

    render(<DetailPage />);

    expect(screen.getByText(/Loading \.\.\./i)).toBeInTheDocument();
  });

  it("renders the error state when no card is found", async () => {
    (fetchCard as jest.Mock).mockResolvedValue({ cards: [] });

    render(<DetailPage />);

    await waitFor(() => {
      expect(
        screen.getByText(
          /Sorry! The selected card could not be found. Plase go back and try again./i
        )
      ).toBeInTheDocument();
    });
  });

  it("renders the card successfully after data is fetched", async () => {
    (fetchCard as jest.Mock).mockResolvedValue({ cards: [mockedCards[0]] });

    render(<DetailPage />);

    await waitFor(() => {
      expect(screen.getByText("Ancestor's Chosen")).toBeInTheDocument();
    });
  });

  it("renders calls the router when the button is clicked", async () => {
    (fetchCard as jest.Mock).mockResolvedValue({ cards: [mockedCards[0]] });

    render(<DetailPage />);

    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: /go back/i })
      ).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole("button", { name: /go back/i }));

    expect(mockedRouterBack).toHaveBeenCalled();
  });
});
