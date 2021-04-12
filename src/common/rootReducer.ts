import { userInfoSlice } from "features/userInfo/userInfoSlice";
import { combineReducers } from "redux";

const featuresReducer = combineReducers({
    userInfo: userInfoSlice.reducer,
});

export const rootReducer = combineReducers({
    features: featuresReducer,
});
