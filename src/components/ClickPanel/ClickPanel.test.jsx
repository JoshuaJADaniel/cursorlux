import ClickPanel from "./ClickPanel";
import reduxRender from "utils/reduxRender";

test("Renders the correct content", () => {
  const { getByText, getAllByRole } = reduxRender(
    <ClickPanel index={0} value={0} />
  );

  // Titles
  getByText("Size");
  getByText("Opacity");
  getByText("Click Effect Color");

  // Sliders
  getAllByRole("slider");
});
