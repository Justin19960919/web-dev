import React from "react";
import TweetItem from "./TweetItem.js";
import {useSelector} from "react-redux";

// import whats happening from whatshappening component
import WhatsHappening from "../WhatsHappening";

// Consumer Component, get state.tweets from store in Build/index.js
const selectAllTweets = (state) => state.tweets;


const TweetList = () => {
  const tweets = useSelector(selectAllTweets);
  // console.log(tweets);
  return(
      <div className="container">
        <WhatsHappening/>
      {
        tweets.map((tweet)=>{
          return <TweetItem tweet={tweet}/>
        })
      }
      </div>
  );
}


export default TweetList;