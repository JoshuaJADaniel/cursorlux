import Navigation from "./Navigation";
import { render, fireEvent } from "@testing-library/react";

const props = {
  current: 0,
  options: ["Tab 1", "Tab 2", "Tab 3"],
  onChange: (val) => {
    props.current = val;
  },
};

test("Renders the correct content", () => {
  const { getByText } = render(<Navigation {...props} />);

  props.options.forEach((option) => {
    getByText(option);
  });
});

test("Ensure initial tab indices are accurate", () => {
  const { getByLabelText } = render(<Navigation {...props} />);

  // Current tab is selected (default)
  expect(getByLabelText(props.options[props.current]).tabIndex).toBe(0);

  // Other tabs are not selected
  props.options.forEach((option, index) => {
    if (index !== props.current) {
      expect(getByLabelText(option).tabIndex).toBe(-1);
    }
  });
});

test("Ensure tab indices switch", () => {
  const { rerender, getByLabelText } = render(<Navigation {...props} />);

  // Select tabs from start to end
  props.options.forEach((option) => {
    const input = getByLabelText(option);

    fireEvent.click(input);
    rerender(<Navigation {...props} />);

    expect(input.tabIndex).toBe(0);
  });

  // Select tabs from end to start
  const reversedOptions = [...props.options].reverse();
  reversedOptions.forEach((option) => {
    const input = getByLabelText(option);

    fireEvent.click(input);
    rerender(<Navigation {...props} />);

    expect(input.tabIndex).toBe(0);
  });
});
