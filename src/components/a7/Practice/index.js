import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import ConditionalOutput from "./ConditionOutput";
import TodoList from "./Todo/TodoList";

// a7 imports
import ReduxExamples from "./ReduxExamples/components";



const Practice = () => {

  return(
      <>

        <ReduxExamples/>
        <TodoList/>
        <Classes/>
        <h1>Practice</h1>
        <ConditionalOutput/>
        <Link to="/a7/hello">
          Hello
        </Link>
        <Link to="/a7/twitter/home">
          Build
        </Link>
      </>
  )
};

export default Practice;
