import { useState } from "react";
// import logo from "./logo.svg";
import Form from "./Form";
import "normalize.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        Testing Form
        <br />
        <br />
        <Form></Form>
      </header>
    </div>
  );
}

export default App;
