import ErrorBoundary from "common/components/errorBoundary";
import { BeerList } from "features/beerList";
import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "common/store";
import "./styles.css";

if (process.env.NODE_ENV !== "production") {
    console.log("Looks like we are in development mode!");
} else {
    console.log("Looks like we are in production mode!");
}

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundary>
                <BeerList />
            </ErrorBoundary>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);

/*
 <button
                onClick={() => setOpen(!open)}
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
                Open Modal
            </button>

             {open && <Modal onClose={() => setOpen(false)} />}{" "}
*/
