import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inmates from "./pages/Inmates";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Inmates} />
                    <Route exact path="/inmates" component={Inmates} />
                    <Route exact path="/inmates/:id" component={Detail} />
                    <Route component={NoMatch} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
