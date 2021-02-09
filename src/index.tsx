import { App } from "components/app";
import * as React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "components/errorBoundary";
import { ChakraProvider } from "@chakra-ui/react";

// 1. Import the extendTheme function
// import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
// const theme = extendTheme({});

if (process.env.NODE_ENV !== "production") {
    console.log("Looks like we are in development mode!");
} else {
    console.log("Looks like we are in production mode!");
}

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root"),
);
