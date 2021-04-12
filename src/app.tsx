import { UserInfo } from "features/userInfo";
import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const App: React.FC = () => {
    return (
        <Router>
            <div>
                <nav className="flex">
                    <div className="m-2">
                        <Link to="/">Home</Link>
                    </div>                    
                </nav>
                <Switch>                    
                    <Route path="/">
                        <div className="m-2">
                            <h1>Eagle UI</h1>
                            <UserInfo />
                        </div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};
