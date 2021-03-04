import Header from "./Header";
import { render, fireEvent } from "@testing-library/react";

test("Renders the correct content", () => {
  const { getByAltText, getByLabelText } = render(<Header />);

  getByLabelText("Activate");
  getByAltText("Logo");
});

test("State button label switches", () => {
  const { getByLabelText } = render(<Header />);

  fireEvent.click(getByLabelText("Activate"));
  getByLabelText("Pause");
});
