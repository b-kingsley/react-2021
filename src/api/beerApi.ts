import axios, { CancelToken } from "axios";

export const getBeers = async (cancellationToken: CancelToken) => {
    try {
        const response = await axios.get<BeerList.Beer[]>("https://api.punkapi.com/v2/beers", {
            cancelToken: cancellationToken,
        });
        return response.data;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            console.log("Request cancelled", err);
        }
        throw err;
    }
};
