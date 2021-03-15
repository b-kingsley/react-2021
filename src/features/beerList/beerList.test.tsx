import * as React from "react";
import { render } from "@testing-library/react";
import { BeerList } from "./beerList";
import { Provider } from "react-redux";
import { store } from "common/store";
import { beers } from "./beerList.data";

window.fetch = jest.fn();

const renderComponent = () =>
    render(
        <Provider store={store}>
            <BeerList />
        </Provider>,
    );

describe("<BeerList />", () => {
    beforeEach(() => {
        (window.fetch as jest.Mock).mockResolvedValue({ json: () => Promise.resolve(beers) });
    });
    it("should render loading", () => {
        const { getByText } = renderComponent();
        expect(window.fetch).toBeCalledWith("https://api.punkapi.com/v2/beers");
        getByText(/Loading.../);
    });
    it("should render data when loaded", async () => {
        const { findByTestId, findByText } = renderComponent();
        const [firstBeer] = beers;

        await findByTestId("beerList");
        await findByText(firstBeer.name);
    });
    it("should render an error", async () => {
        (window.fetch as jest.Mock).mockResolvedValue({ json: () => Promise.reject(new Error("Failed")) });
        const { findByText } = renderComponent();
        await findByText(/An error occurred/);
    });
});
