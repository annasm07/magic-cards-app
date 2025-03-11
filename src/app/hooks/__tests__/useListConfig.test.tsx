import { renderHook, act } from "@testing-library/react";
import { useListConfig } from "../useListConfig";

describe("useListConfig", () => {
  const originalInnerWidth = global.innerWidth;

  afterEach(() => {
    global.innerWidth = originalInnerWidth;
    jest.restoreAllMocks();
  });

  test("sets columnCount based on initial window width", () => {
    global.innerWidth = 1800;
    const { result } = renderHook(() => useListConfig());
    expect(result.current.columnCount).toBe(3);

    global.innerWidth = 1200;
    const { result: result2 } = renderHook(() => useListConfig());
    expect(result2.current.columnCount).toBe(2);

    global.innerWidth = 800;
    const { result: result3 } = renderHook(() => useListConfig());
    expect(result3.current.columnCount).toBe(1);
  });

  test("updates columnCount when window resizes", () => {
    const { result } = renderHook(() => useListConfig());

    act(() => {
      global.innerWidth = 1800;
      window.dispatchEvent(new Event("resize"));
    });
    expect(result.current.columnCount).toBe(3);

    act(() => {
      global.innerWidth = 1200;
      window.dispatchEvent(new Event("resize"));
    });
    expect(result.current.columnCount).toBe(2);

    act(() => {
      global.innerWidth = 800;
      window.dispatchEvent(new Event("resize"));
    });
    expect(result.current.columnCount).toBe(1);
  });

  test("removes resize event listener on unmount", () => {
    const removeEventListenerSpy = jest.spyOn(window, "removeEventListener");
    const { unmount } = renderHook(() => useListConfig());

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      "resize",
      expect.any(Function)
    );
  });
});
