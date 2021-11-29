import React from "react";
import {Link} from "react-router-dom";
// import Classes from "./Classes";
// import ConditionalOutput from "./ConditionOutput";
// import TodoList from "./Todo/TodoList";
//
// import APIExamples from "./APIExamples";
// import ReduxExamples from "./ReduxExamples/components";
import Movies from "./Movies";


const Practice = () => {
  return(
      <>
        <h1>Practice</h1>
        <Link to="/a9/twitter/home">
          Twitter Build
        </Link>

        <Movies/>


      </>
  );
}

export default Practice;
