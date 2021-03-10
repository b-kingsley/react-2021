import getBeers, { Beer } from "api/getBeers";
import { BeerCard } from "./beerCard";
import * as React from "react";
import { Async } from "react-async";
import { Grid } from "@material-ui/core";

export const BeerList: React.FC = () => {
    return (
        <Async promiseFn={getBeers}>
            <Async.Loading>Loading...</Async.Loading>
            <Async.Resolved>
                {(beers: Beer[]) => {
                    return (
                        <Grid container>
                            {beers.map((beer) => (
                                <Grid key={beer.id} item xs={4} spacing={1}>
                                    <BeerCard beer={beer} />
                                </Grid>
                            ))}
                        </Grid>
                    );
                }}
            </Async.Resolved>
            <Async.Rejected>Error</Async.Rejected>
        </Async>
    );
};
