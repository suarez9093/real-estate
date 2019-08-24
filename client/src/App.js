import React, { Component } from 'react';
import './App.css';
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/ErroPage";
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import FormPage from "./pages/FormPage";

// Auth0
// import Auth0Nav from "./components/Auth0Nav";
import { useAuth0 } from "./react-auth0-wrapper";

// Material
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';





function App() {
  const { loading } = useAuth0();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();


  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    // <MuiThemeProvider>

    <div className="App">
      <header>
        {/* <Auth0Nav /> */}
      </header>
    {isAuthenticated ?
      <Navbar /> : null
    }
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/formpage/" component={FormPage} />
        <Route component={Error} />
      </Switch>

    </div>
    // </MuiThemeProvider>

  );

}

export default App;

// class App extends Component {
//   render() {
//     // const { loading } = useAuth0();

//     if (loading) {
//       return (
//         <div>Loading...</div>
//       );
//     }
  
//     return (
//       // <MuiThemeProvider>
  
//       <div className="App">
//         <header>
//           {/* <Auth0Nav /> */}
//         </header>
      
//         <Navbar />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/rooms/" component={Rooms} />
//           <Route exact path="/rooms/:slug" component={SingleRoom} />
//           <Route component={Error} />
//         </Switch>
  
//       </div>
//       // </MuiThemeProvider>
  
//     );
//   }
 

// }

// export default App;

