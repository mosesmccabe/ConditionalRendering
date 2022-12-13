import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered === true ? (
        <Form info="Login" />
      ) : (
        <Form info="Register" />
      )}
    </div>
  );
}

export default App;
