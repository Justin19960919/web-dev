const getTweetAPI = "http://localhost:4000/api/tweets";


export const fetchAllTweets = (dispatch) => {
  fetch(getTweetAPI)
    .then(response => response.json())
    .then(tweets => dispatch({
        type: 'fetch-all-tweets',
        tweets
      })
    );
}


export const postNewTweet = (dispatch, newTweet) => {
  console.log("posting new tweet from react server");
  fetch(getTweetAPI, {
    method: "POST",
    body: JSON.stringify(newTweet),
    headers:{
      "content-type": "application/json"
    }
  })
    .then(response => response.json())
    .then(newTweet => dispatch({
      type: 'create-tweet',
      newTweet
    })
    );
}

export const deleteTweet = (dispatch, tweet) => {
  console.log("deleting tweets from react server");
  fetch(`${getTweetAPI}/${tweet._id}`, {
    method: "DELETE",
  }).then(response => dispatch({
      // ignore response, and just dispatch, backend does it thing
      // and front end does it thing
      type: "delete-tweet",
      tweet // tweet to be deleted
    })
  );
}


export const likeTweet = (dispatch, tweet) => {
  fetch(`${getTweetAPI}/${tweet._id}/like`, {
    method: "PUT"
  })
  .then(response => dispatch({
    type: "like-tweet",
    tweet
  }))
}




