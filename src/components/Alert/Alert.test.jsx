import Alert from "./Alert";
import "@testing-library/jest-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";

const props = {
  visible: true,
  severity: "info",
  message: "Alert Test!",
  onClose: () => {
    props.visible = false;
  },
};

test("Renders the correct content", () => {
  const { getByText, getByTitle } = render(<Alert {...props} />);

  getByTitle("Close");
  getByText(props.message);
});

test("Is accessible to screen readers", () => {
  const { getByRole } = render(<Alert {...props} />);

  getByRole("alert");
  const button = getByRole("button");
  expect(button.getAttribute("aria-label")).toBe("Close");
});

test("Properly hidden from screen readers when invisible", () => {
  const { queryByRole, queryByText } = render(
    <Alert {...props} visible={false} />
  );

  expect(queryByRole("alert")).not.toBeInTheDocument();
  expect(queryByRole("button")).not.toBeInTheDocument();
  expect(queryByText(props.message)).not.toBeInTheDocument();
});

test("Closes on close action", async () => {
  const { rerender, queryByRole, getByLabelText } = render(
    <Alert {...props} />
  );

  fireEvent.click(getByLabelText("Close"));
  rerender(<Alert {...props} />);

  await waitFor(() => {
    expect(queryByRole("alert")).not.toBeInTheDocument();
  });
});
