import { AppDispatch, RootState } from "common/store";
import { getUserInfoSuccess, getUserInfoFailed, getUserInfo } from "./userInfoSlice";
import * as userApi from "api/userApi";

export function fetchUser() {
    return async (dispatch: AppDispatch) => {
        dispatch(getUserInfo());
        try {
            const data = await userApi.getUserInfo();
            dispatch(getUserInfoSuccess(data));
        } catch (error) {
            dispatch(getUserInfoFailed({ message: error.message, cancel: error.__CANCEL__ }));
        }
    };
}

export function cancelFetchUser(message: string) {
    return async (_dispatch: AppDispatch, getState: () => RootState) => {
        // Check if it's still loading before cancelling
        const state = getState();
        if (state.features.userInfo.meta.status === "loading") {
            userApi.cancel(message);
        }
    };
}
