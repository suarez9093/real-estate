import React from "react";
import { Link } from "react-router-dom";

// function Nav() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <a className="navbar-brand" href="/">
//         React Reading List
//       </a>
//     </nav>
//   );
// }

// export default Nav;

// src/components/NavBar.js


import { useAuth0 } from "../../react-auth0-wrapper";

const Nav = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
      {isAuthenticated && (
      <span>
        <Link to="/">Home</Link>&nbsp;
        <Link to="/profile">Profile</Link>
      </span>
    )}
    </div>
  );
};

export default Nav;