import React, {useEffect} from "react";
import WhoToFollowItem from "./WhoToFollowItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllWhos} from "../../services/whoService";


const WhoToFollowList = () => {
  // populate who with data from database
  const dispatch = useDispatch();
  useEffect(() => fetchAllWhos(dispatch), [])

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