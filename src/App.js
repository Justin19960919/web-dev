// import browser router
import {BrowserRouter, Link, Route} from "react-router-dom";

// import bootstrap and font awesome
import "./vendors/boostrap-compiled/css/bootstrap.css";
import "./vendors/bootstrap.min.css";
import "./vendors/font-awesome/css/all.css";

// import components
import HelloWorld from "./components/a6/HelloWorld";

// import Practice from "./components/a6/Practice";
// import Build from "./components/a6/Build";

import Practice from "./components/a7/Practice";
import Build from "./components/a7/Build";

import HomeScreen from "./components/a7/Build/HomeScreen";
import ExploreScreen from "./components/a7/Build/ExploreScreen/ExploreScreen.js";

//
import './App.css';
import React from "react";


const App = () => {
  return (
      <>
      <BrowserRouter>
        <Route path="/a6/twitter/home">
          <HomeScreen/>
        </Route>

        <Route path="/a6/twitter/explore">
          <ExploreScreen/>
        </Route>


        <Route path="/a6/practice" exact={true}>
          <Practice/>
        </Route>

        <Route path="/a6/hello" exact={true}>
          <HelloWorld/>
        </Route>

        {/*a7 routes*/}

        <Route
          path = {["/", "/a7", "/a7/practice"]}
          exact = {true}
        >
          <Practice/>
        </Route>

        <Route
          path="/a7/twitter"
        >
          <Build/>
        </Route>


      </BrowserRouter>
      </>


  );
}

export default App;
