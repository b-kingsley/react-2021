import getBeers, { Beer } from "api/getBeers";
import * as React from "react";
import { useState } from "react";
import { Async } from "react-async";
import { Modal } from "./modal";

export const App: React.FC = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="container mx-auto h-full my-6">
            <button
                onClick={() => setOpen(!open)}
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
                Open Modal
            </button>
            <Async promiseFn={getBeers}>
                <Async.Loading>Loading...</Async.Loading>
                <Async.Resolved>
                    {(beers: Beer[]) => {
                        return (
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                                {open && <Modal onClose={() => setOpen(false)} />}{" "}
                                {beers.map((beer) => (
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
                                ))}
                            </div>
                        );
                    }}
                </Async.Resolved>
                <Async.Rejected>Error</Async.Rejected>
            </Async>
        </div>
    );
};
