import { AppDispatch } from "common/store";
import { getBeersFailed, getBeers, getBeersSuccess } from "./beerList.slice";
import * as beerApi from "api/beerApi";
import { CancelTokenSource } from "axios";

import axios from "axios";

const CancelToken = axios.CancelToken;
let source: CancelTokenSource;

export function fetchBeers() {
    return async (dispatch: AppDispatch) => {
        dispatch(getBeers());
        try {
            source = CancelToken.source();
            const data = await beerApi.getBeers(source.token);
            dispatch(getBeersSuccess(data));
        } catch (error) {
            console.log("error", error);
            dispatch(getBeersFailed(error.message));
        }
    };
}

export function cancelFetchBeers(message: string) {
    if (source) source.cancel(message);
}
