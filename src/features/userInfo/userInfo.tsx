import { Case, Switch } from "common/components/switch";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInfoSelector } from "./userInfoSlice";
import { cancelFetchUser, fetchUser } from "./userInfoThunks";

export const UserInfo = () => {
    const dispatch = useDispatch();
    const { user, meta } = useSelector(userInfoSelector);

    React.useEffect(() => {
        dispatch(fetchUser());
        return () => {
            dispatch(cancelFetchUser("Fetch user info request cancelled"));
        };
    }, [dispatch]);

    return (
        <Switch test={meta.status}>
            <Case value="loading">Loading...</Case>
            <Case value="loaded">
                <div>Welcome {user?.name}</div>
            </Case>
            <Case value="init"></Case>
            <Case value="error">An error occurred: {meta.message}</Case>
        </Switch>
    );
};
