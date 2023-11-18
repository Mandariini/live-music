import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Home from "./Home";

test("Renders list of lobbies", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const element = screen.getByText("Live-music");
  expect(element).toBeDefined();
});
