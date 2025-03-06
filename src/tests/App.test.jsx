import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

//Test #1 - Loading Homepage
test("Renders Homepage", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Favorites')).toBeInTheDocument();
  expect(screen.getByText('Search')).toBeInTheDocument();
  expect(screen.getByText('Random')).toBeInTheDocument();

  expect(screen.getByText('Trending Shows')).toBeInTheDocument();
  expect(screen.getByText('Favorite Shows')).toBeInTheDocument();
  expect(screen.getByText('Squid Game')).toBeInTheDocument();
});

//Test #2 - Favorites button
test("Clicking on Favorites button loads the Favorite shows page.", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  fireEvent.click(screen.getByText("Favorites"));

  expect(screen.getByText('Favorite Shows')).toBeInTheDocument();
});

//Test #3 - Random button test
test("Clicking on Random changes to the 'Click me!' button", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  fireEvent.click(screen.getByText("Random"));

  expect(screen.getByText('Click me!')).toBeInTheDocument();
});