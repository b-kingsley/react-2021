import React from "react";
import "./beerCard.css";

type Props = {
    beer: Readonly<BeerList.Beer>;
};

export const BeerCard: React.FC<Props> = ({ beer }) => {
    return (
        <div className="p-4 shadow m-1" key={beer.id}>
            <div
                className="bg-contain bg-center bg-no-repeat h-36"
                style={{ backgroundImage: `url(${beer.image_url})` }}
            ></div>
            <div className="flex content-center flex-col">
                <div className="text-xl my-4 text-center">{beer.name}</div>
                <div className="text-gray-500">{beer.description}</div>
            </div>
        </div>
    );
};
