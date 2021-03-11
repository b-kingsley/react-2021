import { beerListSlice } from "features/beerList/beerList.slice";
import { combineReducers } from "redux";

const featuresReducer = combineReducers({
    beerList: beerListSlice.reducer,
});

export const rootReducer = combineReducers({
    features: featuresReducer,
});
