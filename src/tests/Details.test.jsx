import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { BrowserRouter, Routes, Route, MemoryRouter } from "react-router-dom";
import Details from "../Details";

//Test #4 - Details info
test("Renders details for Breaking Bad.", async () => {
  render(
    <MemoryRouter initialEntries={['/details/169/show']}>
      <Routes>
        <Route path="/details/:id/:name" element={<Details />} />
      </Routes>
    </MemoryRouter>
  );

  await waitFor(
    () => expect(screen.getByText("Breaking Bad")).toBeInTheDocument(),
  );

  expect(screen.getByText("Breaking Bad follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family's financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.")).toBeInTheDocument();
  expect(screen.getByText("Drama, Crime, Thriller")).toBeInTheDocument();
});

//Test #5 - Font size button
test("Font size adjustment buttons are rendered and can be clicked.", async () => {
  render(
    <MemoryRouter initialEntries={['/details/169/show']}>
      <Routes>
        <Route path="/details/:id/:name" element={<Details />} />
      </Routes>
    </MemoryRouter>
  );

  await waitFor(
    () => expect(screen.queryByText("Loading...")).not.toBeInTheDocument(),
  );

  expect(screen.getByText("Adjust Size")).toBeInTheDocument();

  const largerButton = screen.getByRole('button', { name: /larger/i });
  const defaultButton = screen.getByRole('button', { name: /default/i });

  expect(largerButton).toBeInTheDocument();
  expect(defaultButton).toBeInTheDocument();

  fireEvent.click(largerButton);
  fireEvent.click(defaultButton);
});