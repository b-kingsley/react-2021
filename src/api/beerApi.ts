import axios, { CancelTokenSource } from "axios";
let source: CancelTokenSource;

export const getBeers = async () => {
    source = axios.CancelToken.source();
    const response = await axios.get<BeerList.Beer[]>("https://api.punkapi.com/v2/beers", {
        cancelToken: source.token,
    });
    return response.data;
};

export const cancel = (message: string) => {
    if (source) source.cancel(message);
};
