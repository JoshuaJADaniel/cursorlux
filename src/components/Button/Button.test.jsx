import Button from "./Button";
import { render, fireEvent } from "@testing-library/react";

const props = {
  text: "Test Button",
  onClick: jest.fn(),
};
test("Renders the correct content", () => {
  const { getByRole, getByText } = render(<Button {...props} />);

  getByRole("button");
  getByText(props.text);
});

test("Executes function on click", () => {
  const { getByRole } = render(<Button {...props} />);

  fireEvent.click(getByRole("button"));
  expect(props.onClick).toHaveBeenCalled();
});
