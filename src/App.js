import React, {Component} from 'react';
import Login from "./components/Login";
import './App.css';
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/ErroPage";
import Navbar from './components/Navbar'
import { Route, Switch } from 'react-router-dom'




class App extends Component {
  constructor(){
    super()
    this.state = {
      authenticated: false
    }
  }
  render() {
    return (
      <>
        <Navbar authenticated={this.state.authenticated}/>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route component={Error} />
        </Switch>
  
      </>
    );
  }
  

}

export default App;

