import React, { Component } from "react";
import "./style.css";
import Form from './Components/Form.js';

class App extends Component {
  render() {
      return (
    <div>
      <h1>Welcome to Fake Twitter!</h1>
      <p>What's on your mind?</p>
      <Form />
    </div>
  );
}
}


export default App;