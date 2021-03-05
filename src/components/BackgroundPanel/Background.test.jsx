import BackgroundPanel from "./BackgroundPanel";
import { render } from "@testing-library/react";

test("Renders the correct content", () => {
  const { getByText, getAllByRole } = render(
    <BackgroundPanel index={0} value={0} />
  );

  // Titles
  getByText("Size");
  getByText("Opacity");
  getByText("Background Color");

  // Sliders
  getAllByRole("slider");
});
