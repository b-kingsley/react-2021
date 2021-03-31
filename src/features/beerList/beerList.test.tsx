import * as React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "common/store";
import { beers } from "./beerList.data";
import axios from "axios";
import { BeerListContainer } from "./beerListContainer";

jest.mock("axios");

const renderComponent = () =>
    render(
        <Provider store={store}>
            <BeerListContainer />
        </Provider>,
    );

describe("<BeerList />", () => {
    beforeEach(() => {
        (axios.get as jest.Mock).mockImplementation(() => Promise.resolve({ data: beers }));
        axios.CancelToken = {
            source: () => {
                return { token: "1234" } as any;
            },
            cancel: () => {},
        } as any;
    });
    it("should render loading", () => {
        const { getByText } = renderComponent();
        expect(axios.get).toBeCalledWith("https://api.punkapi.com/v2/beers", { cancelToken: "1234" });

        getByText(/Loading.../);
    });
    it("should render data when loaded", async () => {
        const { findByTestId, findByText } = renderComponent();
        const [firstBeer] = beers;

        await findByTestId("beerList");
        await findByText(firstBeer.name);
    });
    it("should render an error", async () => {
        (axios.get as jest.Mock).mockImplementation(() => Promise.reject(new Error("Failed")));
        const { findByText } = renderComponent();
        await findByText(/An error occurred/);
    });
});
