import ClickPanel from "./ClickPanel";
import { fireEvent, render } from "@testing-library/react";

test("Renders the correct content", () => {
  const { getByText, getAllByRole } = render(
    <ClickPanel index={0} value={0} />
  );

  // Titles
  getByText("Size");
  getByText("Opacity");
  getByText("Click Effect Color");

  // Sliders
  getAllByRole("slider");
});
