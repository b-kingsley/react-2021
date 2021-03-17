import { AppDispatch, RootState } from "common/store";
import { getBeersFailed, getBeers, getBeersSuccess } from "./beerList.slice";
import * as beerApi from "api/beerApi";

export function fetchBeers() {
    return async (dispatch: AppDispatch) => {
        dispatch(getBeers());
        try {
            const data = await beerApi.getBeers();
            dispatch(getBeersSuccess(data));
        } catch (error) {
            dispatch(getBeersFailed({ message: error.message, cancel: error.__CANCEL__ }));
        }
    };
}

export function cancelFetchBeers(message: string) {
    return async (_dispatch: AppDispatch, getState: () => RootState) => {
        // Check if it's still loading before cancelling
        const state = getState();
        if (state.features.beerList.meta.status === "loading") {
            beerApi.cancel(message);
        }
    };
}
