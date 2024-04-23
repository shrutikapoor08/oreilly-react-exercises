import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Slideshow from "./Slideshow";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ products: [{ id: 1, name: "Product 1" }] }),
  })
);

describe("Slideshow Component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it("renders slideshow component with loading state", async () => {
    const { getByText } = render(<Slideshow />);
    expect(getByText("Slideshow component")).toBeInTheDocument();
    await waitFor(() => expect(fetch).toHaveBeenCalled());
  });

  it("renders slideshow component with fetched products", async () => {
    const { getByText } = render(<Slideshow />);
    await waitFor(() => expect(fetch).toHaveBeenCalled());
    expect(getByText("Product 1")).toBeInTheDocument();
  });

  it("renders slideshow component with slide and controls when products are fetched", async () => {
    const { getByText, getByTestId } = render(<Slideshow />);
    await waitFor(() => expect(fetch).toHaveBeenCalled());
    expect(getByText("Product 1")).toBeInTheDocument();
    expect(getByTestId("slide")).toBeInTheDocument();
    expect(getByTestId("controls")).toBeInTheDocument();
  });

  it("changes slide when clicking on controls", async () => {
    const { getByText, getByTestId } = render(<Slideshow />);
    await waitFor(() => expect(fetch).toHaveBeenCalled());
    fireEvent.click(getByText("Next"));
    expect(getByTestId("slide")).toBeInTheDocument();
    fireEvent.click(getByText("Previous"));
    expect(getByTestId("slide")).toBeInTheDocument();
  });
});
