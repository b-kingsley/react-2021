import React from "react";
import ReactDOM from "react-dom";

import "./style.css";
import Icon from "./icon.jpg";
import printMe from "./print";

const App: React.FC = () => (
  <main className="hello">
    React 2021 App Configuration
    <img src={Icon} alt=" " />
    <button onClick={printMe}>Print Me</button>
  </main>
);

ReactDOM.render(<App />, document.getElementById("root"));
