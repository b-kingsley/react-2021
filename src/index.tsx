import { App } from "./app";
import * as React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./errorBoundary";

ReactDOM.render(
    <React.StrictMode>
        <ErrorBoundary>
            <App name="Hello" />
        </ErrorBoundary>
    </React.StrictMode>,
    document.getElementById("root"),
);
