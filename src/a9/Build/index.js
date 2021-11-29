// Provider
import React from "react";
import {Route} from "react-router-dom";


import ExploreScreen from "./ExploreScreen/ExploreScreen.js";
import HomeScreen from "./HomeScreen/index.js";
import ProfileScreen from "./ProfileScreen/index.js";

// import all reducers
import who from "../reducers/who.js";
import tweets from "../reducers/tweets.js"
import profile from "../reducers/profile.js";

import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

// combine both reducers
const totalReducer = combineReducers({
  tweets: tweets,
  who: who,
  profile: profile
});

// create data storage
const store = createStore(totalReducer);

const Build = () => {
  return(
      <Provider store={store}>
        <>
          <Route
              path = {["/", "/a9/twitter/home"]}
              exact = {true}
              component = {HomeScreen}
          />

          <Route
              path = "/a9/twitter/explore"
              exact = {true}
              component = {ExploreScreen}
          />

          <Route
              path = "/a9/twitter/profile"
              exact = {true}
              component = {ProfileScreen}
          />

          </>
      </Provider>
  );
};

export default Build;
