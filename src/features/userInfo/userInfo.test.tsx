import * as React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "common/store";
import axios from "axios";
import { UserInfo } from "./userInfo";

jest.mock("axios");

const renderComponent = () =>
    render(
        <Provider store={store}>
            <UserInfo />
        </Provider>,
    );

describe("Feature - User Info", () => {
    beforeEach(() => {
        (axios.get as jest.Mock).mockImplementation(() => Promise.resolve({ data: {} }));
        axios.CancelToken = {
            source: () => {
                return { token: "1234", cancel: () => {} } as any;
            },
        } as any;
    });

    it("should display a loading message", () => {
        const { getByText } = renderComponent();
        getByText("Loading...");
    });

    it("should display the users name", async () => {
        const { findByText } = renderComponent();
        await findByText("Welcome Test User");
    });

    it("should render an error message", async () => {
        axios.CancelToken = {
            source: () => {
                throw new Error("Error in axios");
            },
        } as any;
        const { findByText } = renderComponent();
        await findByText("An error occurred: Error in axios");
    });
});
