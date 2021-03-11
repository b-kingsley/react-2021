import * as React from "react";
import { render } from "@testing-library/react";
import { Switch } from "./switch";
import { Case } from "./case";

describe("<Switch />", () => {
    it("should render", () => {
        const { getByText, queryByText } = render(
            <Switch test="loading">
                <Case value="init">Init</Case>
                <Case value="loading">Loading...</Case>
                <Case value="loaded">Loaded</Case>
                <Case value="error">Error</Case>
            </Switch>,
        );
        getByText("Loading...");
        expect(queryByText("Init")).not.toBeInTheDocument();
        expect(queryByText("Loaded")).not.toBeInTheDocument();
        expect(queryByText("Error")).not.toBeInTheDocument();
    });
    it("should render with a single case", () => {
        const { getByText } = render(
            <Switch test="loading">
                <Case value="loading">Loading...</Case>
            </Switch>,
        );
        getByText("Loading...");
    });
    it("should handle no case statements", () => {
        const { container } = render(<Switch test="loading"></Switch>);
        expect(container).toBeInTheDocument();
    });
    it("should handle no matching case statements", () => {
        const { container } = render(
            <Switch test="loading">
                <Case value="loaded"></Case>
                <Case value="init"></Case>
                <Case value="error"></Case>
            </Switch>,
        );
        expect(container).toBeInTheDocument();
    });
});
