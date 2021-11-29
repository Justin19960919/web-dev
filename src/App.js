// import browser router
import {BrowserRouter, Link, Route} from "react-router-dom";

// import bootstrap and font awesome
import "./vendors/boostrap-compiled/css/bootstrap.css";
import "./vendors/bootstrap.min.css";
import "./vendors/font-awesome/css/all.css";

// import components
//import HelloWorld from "./components/a6/HelloWorld";

// import Practice from "./components/a6/Practice";
// import Build from "./components/a6/Build";

// import HomeScreen from "./components/a8/Build/HomeScreen";
// import ExploreScreen from "./components/a8/Build/ExploreScreen/ExploreScreen.js";

import Practice from "./components/a8/Practice";
import Build from "./components/a8/Build";


import './App.css';
import React from "react";
import A9 from "./a9";


const App = () => {
  return (
      <>
        <BrowserRouter>
          <Link to="/a8/practice"> A8 practice </Link>
          <br/>
          <Link to="/a8/twitter"> A8 Build </Link>
          <br/>
          <Link to="/a9/practice"> A9 practice </Link>

          <Route path="/a9">
            <A9/>
          </Route>

          <Route
            path = {["/", "/a8", "/a8/practice"]}
            exact = {true}
          >
            <Practice/>
          </Route>

          <Route
              path="/a8/twitter"
          >
            <Build/>
          </Route>


      </BrowserRouter>
      </>


  );
}

export default App;
