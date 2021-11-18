// consuming data from hello.js

import React from "react";
// useSelector is used to extract message from reducer
import {useSelector} from "react-redux";


const HelloReduxExampleComponent = () => {
  const message = useSelector(state => state.hello.message);

  return(
      <h1>{message}</h1>
  )

}



export default HelloReduxExampleComponent;






