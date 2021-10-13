import who from "./who.js";
import WhoToFollowItem from "./WhoToFollowItem.js";


const WhoToFollowList = () => {
  return(`
    <ul class="list-group">
      <li class="list-group-item">
        What To follow
      </li>
      ${
        who.map(whoItem => {
          return(WhoToFollowItem(whoItem));
        }).join("")
      }
    </ul> 
  `);
}


export default WhoToFollowList;