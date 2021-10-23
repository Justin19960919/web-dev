import React from "react";
import who from "./who.json";
import WhoToFollowItem from "./WhoToFollowItem";


const WhoToFollowList = () => {
  return(
    <ul className="list-group">
      <li className="list-group-item">
        What To follow
      </li>
      {
        who.map(whoItem => {
          return(
              <WhoToFollowItem who={whoItem}/>
              );
        })
      }
    </ul> 
  );
}


export default WhoToFollowList;