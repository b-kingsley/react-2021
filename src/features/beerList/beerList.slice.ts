import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "common/store";

const initialState: BeerList.State = {
    items: [],
    meta: {
        status: "init",
        message: "",
        lastUpdated: undefined,
    },
};

export const beerListSlice = createSlice({
    name: "beerList",
    initialState,
    reducers: {
        getBeers: (state) => {
            state.meta.status = "loading";
            return state;
        },
        getBeersSuccess: (state, action: PayloadAction<BeerList.Beer[]>) => {
            state.meta.status = "loaded";
            state.meta.lastUpdated = Date.now();
            state.items = action.payload;
            return state;
        },
        getBeersFailed: (state, action: PayloadAction<Error>) => {
            state.meta.status = "error";
            state.meta.message = action.payload.message;
            return state;
        },
    },
});

export const { getBeers, getBeersSuccess, getBeersFailed } = beerListSlice.actions;

export const beerListSelector = (state: RootState) => state.features.beerList;
