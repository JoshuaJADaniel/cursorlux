import Header from "./Header";
import { render, fireEvent } from "@testing-library/react";

test("Renders the correct content", () => {
  const { getByAltText, getByLabelText } = render(<Header />);

  getByLabelText("Pause");
  getByAltText("Logo");
});

test("State button label switches", () => {
  const { getByLabelText } = render(<Header />);

  fireEvent.click(getByLabelText("Pause"));
  getByLabelText("Activate");
});
