import BorderPanel from "./BorderPanel";
import { render } from "@testing-library/react";

test("Renders the correct content", () => {
  const { getByText, getAllByRole, getByTestId } = render(
    <BorderPanel index={0} value={0} />
  );

  // Titles
  getByText("Opacity");
  getByText("Thickness");
  getByText("Border Color");

  // Sliders
  getAllByRole("slider");

  // Radios
  getByTestId("radios");
});
