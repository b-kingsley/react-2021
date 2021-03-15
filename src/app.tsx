import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BeerList } from "./features/beerList";

export const App: React.FC = () => {
    return (
        <Router>
            <div>
                <nav className="flex">
                    <div className="m-2">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="m-2">
                        <Link to="/beer-list">Beer List</Link>
                    </div>
                </nav>
                <Switch>
                    <Route path="/beer-list">
                        <BeerList />
                    </Route>
                    <Route path="/">
                        <div className="m-2">
                            <h1>Welcome</h1>
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};
