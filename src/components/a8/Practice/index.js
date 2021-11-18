import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import ConditionalOutput from "./ConditionOutput";
import TodoList from "./Todo/TodoList";

import APIExamples from "./APIExamples";
import ReduxExamples from "./ReduxExamples/components";



const Practice = () => {
  return(
      <>
        <h1>Practice</h1>
        <Link to="/a8/twitter/home">
          Build
        </Link>
        <APIExamples/>
        {/*<ReduxExamples/>*/}
      </>
  );
}

export default Practice;
