import BackgroundPanel from "./BackgroundPanel";
import reduxRender from "utils/reduxRender";

test("Renders the correct content", () => {
  const { getByText, getAllByRole } = reduxRender(
    <BackgroundPanel index={0} value={0} />
  );

  // Titles
  getByText("Size");
  getByText("Opacity");
  getByText("Background Color");

  // Sliders
  getAllByRole("slider");
});
