import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Dummy from "./comp/DummyComp";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>REDUX</h1>
        <Dummy />
      </div>
    </Provider>
  );
}

export default App;
