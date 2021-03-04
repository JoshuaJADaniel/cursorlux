import colors from "data/colors";
import ColorPicker from "./ColorPicker";
import { render, fireEvent } from "@testing-library/react";

const props = {
  color: colors[0],
  title: "Test Colors",
  onChange: (color) => {
    props.color = color;
  },
};

test("Renders the correct content", () => {
  const { getByText, getByTitle } = render(<ColorPicker {...props} />);

  getByText(props.title);
  getByTitle(props.color);
});

test("Is keyboard accessible", () => {
  const { getByTitle } = render(<ColorPicker {...props} />);

  colors.forEach((color) => {
    expect(getByTitle(color).tabIndex).toBe(0);
  });
});

test("Changes colors on click", () => {
  const { getByTitle } = render(<ColorPicker {...props} />);

  colors.forEach((color) => {
    fireEvent.click(getByTitle(color));
    expect(props.color).toBe(color);
  });
});
