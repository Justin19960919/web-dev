import React from "react";
import WhoToFollowItem from "./WhoToFollowItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
  // retrieve state from store
  const who = useSelector(state => state.who);

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