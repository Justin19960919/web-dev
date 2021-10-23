// import browser router
import {BrowserRouter, Link, Route} from "react-router-dom";

// import bootstrap and font awesome
import "./vendors/boostrap-compiled/css/bootstrap.css";
import "./vendors/bootstrap.min.css";
import "./vendors/font-awesome/css/all.css";

// import components
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice";
import Build from "./components/a6/Build";

import HomeScreen from "./components/a6/Build/HomeScreen";
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen.js";

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

        {/*<div className="container">*/}

        {/*  /!*<Route path={["/", "/a6", "/a6/practice"]} exact={true}>*!/*/}

        {/*  <Route path="/a6/build" exact={true}>*/}
        {/*    <Build/>*/}
        {/*  </Route>*/}

        {/*</div>*/}
      </BrowserRouter>
      </>


  );
}

export default App;
