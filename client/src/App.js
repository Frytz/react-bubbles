import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import PrivateRoute from "./utils/PrivateRoute";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">

      
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
          {/* <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/bubblepage" component={BubblePage} /> */}
        <Switch>
          <PrivateRoute exact path="/bubbles" component={BubblePage} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
