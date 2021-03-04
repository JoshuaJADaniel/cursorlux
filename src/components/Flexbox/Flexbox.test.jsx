import Flexbox from "./FlexBox";
import { render } from "@testing-library/react";

test("Renders the correct content", () => {
  const { getByText } = render(
    <Flexbox>
      <h1>Flexbox</h1>
    </Flexbox>
  );

  getByText("Flexbox");
});
