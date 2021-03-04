import RadioRow from "./RadioRow";
import { render, fireEvent } from "@testing-library/react";

const props = {
  value: "Option 1",
  options: ["Option 1", "Option 2", "Option 3"],
  onChange: (val) => {
    props.value = val;
  },
};

test("Renders the correct content", () => {
  const { getByText } = render(<RadioRow {...props} />);

  props.options.forEach((option) => {
    getByText(option);
  });
});

test("Options are accessible", () => {
  const { getAllByRole, getByLabelText } = render(<RadioRow {...props} />);

  expect(getAllByRole("radio").length).toBe(props.options.length);

  props.options.forEach((option) => {
    getByLabelText(option);
  });
});

test("Initial option is checked", () => {
  const { getAllByRole } = render(<RadioRow {...props} />);

  const activeRadios = getAllByRole("radio").filter((radio) => radio.checked);

  expect(activeRadios.length).toBe(1);
  expect(activeRadios[0].value).toBe(props.value);
});

test("Options can be switched", () => {
  const { rerender, getByLabelText } = render(<RadioRow {...props} />);

  // Selection from start to end
  props.options.forEach((option) => {
    const input = getByLabelText(option);

    fireEvent.click(input);
    rerender(<RadioRow {...props} />);

    expect(input.checked).toBeTruthy();
  });

  // Selection from end to start
  const reversedOptions = [...props.options].reverse();
  reversedOptions.forEach((option) => {
    const input = getByLabelText(option);

    fireEvent.click(input);
    rerender(<RadioRow {...props} />);

    expect(input.checked).toBeTruthy();
  });
});
