import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { useAuth0 } from "./react-auth0-wrapper";
import Profile from "./components/Profile";

function App() {
  const { loading } = useAuth0();
  if (loading) {
    return (
      <div>Loading...</div>
    );
  }
  return (
    <Router>
      <div className="App">

        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
          <Route path="/" exact />
          <Route path="/profile" component={Profile} />
        </Switch>
       
      </div>
    </Router>
  );
}

export default App;