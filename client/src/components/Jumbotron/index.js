import React from "react";

function Jumbotron({ children }) {
    // props  {children: `<h1>`, }
    //   const children = props.children;
    //   const {children} = props
    return (
        <div
            style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
            className="jumbotron"
        >
            {children}
        </div>
    );
}

export default Jumbotron;
