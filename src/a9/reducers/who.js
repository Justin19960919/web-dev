//import whoJSON from "./data/who.json";

const who = (state = [], action) => {
  switch(action.type){
    case 'fetch-all-whos':
      return action.whos;
    default:
      return state;
  }
}

export default who;



