import { render, screen } from "@testing-library/react";
import { useFilteredCards } from "../useFilteredCards";
import { mockedCards } from "@/__mocks__/cards.mock";

describe("useFilteredCards", () => {
  const invalidCases = [undefined, null, []];

  it.each(invalidCases)(
    "should return an empty array when %p is passed",
    (invalidCase) => {
      // @ts-expect-error - proposal test
      const filteredItem = useFilteredCards("Aven", invalidCase);

      expect(filteredItem).toEqual([]);
    }
  );

  it("should return the filtered list", () => {
    const TestComponent = () => {
      const filteredItem = useFilteredCards("Aven", mockedCards);

      return filteredItem && <div>Data: {JSON.stringify(filteredItem)}</div>;
    };

    render(<TestComponent />);
    const filteredList = screen.getByText(/Aven Cloudchaser/i);
    expect(filteredList).toBeInTheDocument();
    expect(screen.queryByText(/Ancestor's Chosen/i)).not.toBeInTheDocument();
  });
});
