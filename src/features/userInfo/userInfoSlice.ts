import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "common/store";

const initialState: UserInfo.State = {
    user: null,
    meta: {
        status: "init",
        message: "",
        lastUpdated: undefined,
    },
};

export const userInfoSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        getUserInfo: (state) => {
            state.meta.status = "loading";
            return state;
        },
        getUserInfoSuccess: (state, action: PayloadAction<UserInfo.User>) => {
            state.meta.status = "loaded";
            state.meta.lastUpdated = Date.now();
            state.user = action.payload;
            return state;
        },
        getUserInfoFailed: (state, action: PayloadAction<{ message: string; cancel: boolean }>) => {
            state.meta.status = action.payload.cancel ? "cancelled" : "error";
            state.meta.message = action.payload.message;
            return state;
        },
    },
});

export const { getUserInfo, getUserInfoSuccess, getUserInfoFailed } = userInfoSlice.actions;

export const userInfoSelector = (state: RootState) => state.features.userInfo;
