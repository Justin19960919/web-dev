import tweets_ from "./data/tweets.json";
/*
Relative fields --
userImg
userName
userAccount
time
response
reference.imgSource
reference.title
reference.content
commentNumber
retweetNumber
loveNumber
* */
const tweets = (state = tweets_, action) => {
  switch(action.type){
    case 'create-tweet':
      // create new tweet object after receiving dispatch
      const newTweet = {
        _id: (new Date()).getTime() + "",
        username: "Elon Musk",
        userImg: "/images/elonMusk.jpg",
        userAccount: "elonmusk",
        time: "2h",
        response: action.tweet,
        reference: {
          imgSource:"/images/default.jpg",
          title: "",
          content: ""
        },
        commentNumber: 123,
        retweetNumber: 456,
        loveNumber: 789,
        liked: false
      };
      return(
          [newTweet, ...state]
      );
    case 'delete-tweet':
      return state.filter(tweet => tweet._id !== action.tweet._id);
    case 'like-tweet':
      // use find method to find the corresponding tweet
      const likedTweet = state.find(tweet => tweet === action.tweet);
      console.log(likedTweet);
      if(likedTweet.liked === true){
        likedTweet.liked = false;
        likedTweet.loveNumber --;
      }else{
        likedTweet.liked = true;
        likedTweet.loveNumber ++;
      }
      return state;
      default:
      return(state);
  }
};
// reducer is imported in Build/index.js
export default tweets;

