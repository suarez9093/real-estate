import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/ErroPage";
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';

// Auth0
import Auth0Nav from "./components/Auth0Nav";
import { useAuth0 } from "./react-auth0-wrapper";






function App() {
  const { loading } = useAuth0();

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className="App">
      
    
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>

    </div>
  );

}

export default App;

