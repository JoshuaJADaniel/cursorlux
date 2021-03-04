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
  const { getByLabelText } = render(<Navigation {...props} />);

  getByLabelText("Tab 1");
  getByLabelText("Tab 2");
  getByLabelText("Tab 3");
});

test("Ensure initial tab indices are accurate", () => {
  const { getByLabelText } = render(<Navigation {...props} />);

  // Tab 1 is selected (default)
  expect(getByLabelText("Tab 1").tabIndex).toBe(0);
  expect(getByLabelText("Tab 2").tabIndex).toBe(-1);
  expect(getByLabelText("Tab 3").tabIndex).toBe(-1);
});

test("Ensure tab indices switch", () => {
  const { rerender, getByLabelText } = render(<Navigation {...props} />);

  const tab1 = getByLabelText("Tab 1");
  const tab2 = getByLabelText("Tab 2");
  const tab3 = getByLabelText("Tab 3");

  fireEvent.click(tab2);
  rerender(<Navigation {...props} />);

  // Tab 2 selected
  expect(tab1.tabIndex).toBe(-1);
  expect(tab2.tabIndex).toBe(0);
  expect(tab3.tabIndex).toBe(-1);

  fireEvent.click(tab3);
  rerender(<Navigation {...props} />);

  // Tab 3 selected
  expect(tab1.tabIndex).toBe(-1);
  expect(tab2.tabIndex).toBe(-1);
  expect(tab3.tabIndex).toBe(0);

  fireEvent.click(tab1);
  rerender(<Navigation {...props} />);

  // Return to Tab 1
  expect(tab1.tabIndex).toBe(0);
  expect(tab2.tabIndex).toBe(-1);
  expect(tab3.tabIndex).toBe(-1);
});
