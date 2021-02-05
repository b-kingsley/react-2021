import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./errorBoundary";

import "./style.css";
import Icon from "./icon.jpg";
import printMe from "./print";

declare namespace App {
  interface IAppProps {
    name: string;
  }
}

const App: React.FC<App.IAppProps> = ({ name }) => {
  return (
    <main className="hello">
      React 2021 App Configuration - {name}
      <img src={Icon} alt=" " />
      <button onClick={printMe}>Print Me</button>
    </main>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App name="Hello" />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
