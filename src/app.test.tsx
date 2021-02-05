import * as React from "react";
import { App } from "./app";
import { render } from "@testing-library/react";

describe("<App />", () => {
    it("should render the name", () => {
        const { getByText } = render(<App name="Goodbye" />);
        getByText("Goodbye", { exact: false });
    });
});
