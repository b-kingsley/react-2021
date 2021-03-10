import { App } from "components/app";
import * as React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "components/errorBoundary";
import "./styles.css";

if (process.env.NODE_ENV !== "production") {
    console.log("Looks like we are in development mode!");
} else {
    console.log("Looks like we are in production mode!");
}

ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById("root"),
);
