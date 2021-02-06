import * as React from "react";
import "./style.css";
import Icon from "./icon.jpg";
import printMe from "./print";

type AppProps = {
    name: string;
};

export const App: React.FC<AppProps> = ({ name }: AppProps) => {
    return (
        <main className="hello">
            React 2021 App Configuration - {name}
            <img src={Icon} alt=" " />
            <button onClick={printMe}>Print Me</button>
        </main>
    );
};
