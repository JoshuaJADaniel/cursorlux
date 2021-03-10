import SliderRow from "./SliderRow";
import { render } from "@testing-library/react";

const props = {
  min: 0,
  max: 100,
  value: 40,
};

test("Renders the correct content", () => {
  const { getByRole } = render(<SliderRow {...props} />);

  const slider = getByRole("slider");
  expect(slider.getAttribute("aria-valuemin")).toBe(props.min.toString());
  expect(slider.getAttribute("aria-valuemax")).toBe(props.max.toString());
  expect(slider.getAttribute("aria-valuenow")).toBe(props.value.toString());
});
