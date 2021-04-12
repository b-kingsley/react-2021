import axios, { CancelTokenSource } from "axios";
let source: CancelTokenSource;

export const getUserInfo = async () => {
    source = axios.CancelToken.source();
    // const response = await axios.get<UserInfo.User>("<url to user endpoint>", {
    //     cancelToken: source.token,
    // });
    // return response.data;

    return new Promise((resolve) =>
        setTimeout(
            () => resolve({ id: 1, name: "Test User", email: "tuser@onyxcommodities.com" } as UserInfo.User),
            1000,
        ),
    ) as Promise<UserInfo.User>;
};

export const cancel = (message: string) => {
    if (source) source.cancel(message);
};
