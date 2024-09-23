import React from "react";
import "./App.css";
import Card, { CardType } from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card height="100px" width="100px" type={CardType.outlined}>
        <button>Click me!</button>
      </Card>
    </div>
  );
}

export default App;
