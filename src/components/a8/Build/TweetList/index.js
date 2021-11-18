import React, {useEffect} from "react";
import TweetItem from "./TweetItem.js";
import {useDispatch, useSelector} from "react-redux";

// import whats happening from whatshappening component
import WhatsHappening from "../WhatsHappening";
import {fetchAllTweets} from "../../../../services/tweetService";

// Consumer Component, get state.tweets from store in Build/index.js

const TweetList = () => {
  const selectAllTweets = (state) => state.tweets;
  const tweets = useSelector(selectAllTweets);
  //console.log("got tweets from reducer (from server)" + tweets);

  const dispatch = useDispatch();
  useEffect(() => fetchAllTweets(dispatch), []);

  return(
      <div className="container">
        <WhatsHappening/>
      {
        tweets.map((tweet)=>{
          return <TweetItem tweet={tweet} key={tweet._id}/>
        })
      }
      </div>
  );
}


export default TweetList;