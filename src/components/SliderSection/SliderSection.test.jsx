import SliderSection from "./SliderSection";
import { render } from "@testing-library/react";

const props = {
  min: 0,
  max: 100,
  step: 20,
  value: 40,
  format: (value) => `${value}%`,
  onChange: (value) => {
    props.value = value;
  },
  title: "Test Slider",
};

test("Renders the correct content", () => {
  const { getByText, getByRole } = render(<SliderSection {...props} />);

  getByText(props.title);

  const slider = getByRole("slider");
  expect(slider.getAttribute("aria-valuemin")).toBe(props.min.toString());
  expect(slider.getAttribute("aria-valuemax")).toBe(props.max.toString());
  expect(slider.getAttribute("aria-valuenow")).toBe(props.value.toString());
});
