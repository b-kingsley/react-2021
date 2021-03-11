export const getBeers = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const data: BeerList.Beer[] = await response.json();
    return data;
};
