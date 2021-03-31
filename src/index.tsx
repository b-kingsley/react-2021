import { App } from "app";
import ErrorBoundary from "common/components/errorBoundary";
import { store } from "common/store";
import * as React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
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
                <App />
            </ErrorBoundary>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);
