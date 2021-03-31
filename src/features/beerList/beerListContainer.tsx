import { Case } from "common/components/switch/case";
import { Switch } from "common/components/switch";
import { fetchBeers, cancelFetchBeers } from "./beerList.thunks";
import { beerListSelector } from "features/beerList/beerList.slice";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BeerCard } from "./components/beerCard";

export const BeerListContainer: React.FC = () => {
    const dispatch = useDispatch();
    const { items, meta } = useSelector(beerListSelector);

    React.useEffect(() => {
        dispatch(fetchBeers());
        return () => {
            dispatch(cancelFetchBeers("Fetch beers request cancelled"));
        };
    }, [dispatch]);

    return (
        <Switch test={meta.status}>
            <Case value="loading">Loading...</Case>
            <Case value="loaded">
                <div data-testid="beerList" className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                    {items.map((beer) => (
                        <BeerCard key={beer.id} beer={beer} />
                    ))}
                </div>
            </Case>
            <Case value="init"></Case>
            <Case value="error">An error occurred: {meta.message}</Case>
        </Switch>
    );
};
