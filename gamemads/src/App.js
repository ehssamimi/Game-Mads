import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './style/bootstrap.min.css';
import './style/bootstrap-rtl.min.css';
import {
    Route,
    Switch,
    // Redirect
} from "react-router-dom";
import Main from "./components/main/Main";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path="/" component={Main}/>
        </Switch>
    </div>
  );
}

export default App;
