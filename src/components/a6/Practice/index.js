import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import ConditionalOutput from "./ConditionOutput";

import TodoList from "./Todo/TodoList";


const Practice = () => {

  return(
      <>
        <TodoList/>
        <Classes/>
        <h1>Practice</h1>
        <ConditionalOutput/>
        <Link to="/a6/hello">
          Hello
        </Link>
        <Link to="/a6/twitter/home">
          Build
        </Link>
      </>
  )
};

export default Practice;
