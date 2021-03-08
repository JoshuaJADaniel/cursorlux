import BorderPanel from "./BorderPanel";
import reduxRender from "utils/reduxRender";

test("Renders the correct content", () => {
  const { getByText, getAllByRole, getByTestId } = reduxRender(
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
