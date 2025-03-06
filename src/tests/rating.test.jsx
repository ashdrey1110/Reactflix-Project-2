import { render, screen, fireEvent } from "@testing-library/react";
import StarRating from "../rating";
import { test, expect } from 'vitest';
import '@testing-library/jest-dom';

//Test #6 - Loads 5 stars
test("Checks if there are 5 stars.", () => {
  render(<StarRating />);

  const stars = screen.getAllByText('★');
  expect(stars).toHaveLength(5);

  expect(screen.getByText('0 of 5 stars')).toBeInTheDocument();
});

//Test #7 - Clickable stars 
test("Checks if stars can be selected.", () => {
  render(<StarRating totalStars={5} />);

  const stars = screen.getAllByText('★');

  fireEvent.click(stars[1]);

  expect(screen.getByText('2 of 5 stars')).toBeInTheDocument();

  expect(stars[0].className).toContain('selected');
  expect(stars[1].className).toContain('selected');

  expect(stars[2].className).not.toContain('selected');
  expect(stars[3].className).not.toContain('selected');
  expect(stars[4].className).not.toContain('selected');
});