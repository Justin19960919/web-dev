// this will be our glue for reducer and consumer: Provider

import React from "react";

// import the components -- Consumers
import HelloReduxExampleComponent from "./HelloReduxExampleComponent";
import Todos from "./Todos";

// import reducers
import hello from "../reducers/hello";
import todos from "../reducers/todo";


import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";

// combine the reducers
const reducers = combineReducers({hello, todos});

// store data from reducers
const store = createStore(reducers);


const ReduxExamples = () => {
  return(
      <Provider store = {store}>
        <div>
          <h2>Redux Examples</h2>
          <Todos/>
          <HelloReduxExampleComponent/>
        </div>
      </Provider>
  );
};
export default ReduxExamples;
