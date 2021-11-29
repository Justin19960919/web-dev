import React from "react";

const ConditionalOutputIfElse = () => {
  const loggedIn = true;
  if(loggedIn){
    return(
      <h2>Welcome if else</h2>
    );
  }
  else{
    return(
        <h2>Please Login if else</h2>
    );
  }
}


export default ConditionalOutputIfElse;
