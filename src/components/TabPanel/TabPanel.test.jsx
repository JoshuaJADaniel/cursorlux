import TabPanel from "./TabPanel";
import { render } from "@testing-library/react";

test("Renders the correct content", () => {
  const { getByText } = render(
    <TabPanel index={0} value={0}>
      <h1>Tab Panel</h1>
    </TabPanel>
  );

  getByText("Tab Panel");
});
