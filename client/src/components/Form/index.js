import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function InputFirstName(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function InputLastName(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function InputEmail(props) {
    return (
      <div className="form-group">
        <input className="form-control" {...props} />
      </div>
    );

}

    export function FormBtn(props) {
        return (
          <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-primary">
            {props.children}
          </button>
        );
      }

    
  

