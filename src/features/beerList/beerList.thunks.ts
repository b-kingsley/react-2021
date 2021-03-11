import { AppDispatch } from "common/store";
import { getBeersFailed, getBeers, getBeersSuccess } from "./beerList.slice";
import * as beerApi from "api/beerApi";

export function fetchBeers() {
    return async (dispatch: AppDispatch) => {
        dispatch(getBeers());
        try {
            const data = await beerApi.getBeers();
            dispatch(getBeersSuccess(data));
        } catch (error) {
            dispatch(getBeersFailed(error.message));
        }
    };
}
