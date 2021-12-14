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
const tweets = (state = [], action) => {
  switch(action.type){
    case 'fetch-all-tweets':
      //console.log(`rendering data from server ${action.tweets}`)
      return(
        action.tweets
      );

    case 'create-tweet':
      // create new tweet object after receiving dispatch
      // this was used in redux managements
      // const newTweet = {
      //   _id: (new Date()).getTime() + "",
      //   username: "Elon Musk",
      //   userImg: "/images/elonMusk.jpg",
      //   userAccount: "elonmusk",
      //   time: "2h",
      //   response: action.tweet,
      //   reference: {
      //     imgSource:"/images/default.jpg",
      //     title: "",
      //     content: ""
      //   },
      //   commentNumber: 123,
      //   retweetNumber: 456,
      //   loveNumber: 789,
      //   liked: false
      // };
      // console.log(`state:  ${state}, typeof state: ${typeof(state)}, object: ${JSON.stringify(state)}`);
      const added = [action.newTweet, ...state];
      return added;

    case 'delete-tweet':
      return state.filter(tweet => tweet._id !== action.tweet._id);


      case 'like-tweet':
      // use find method to find the corresponding tweet
      const likedTweet = state.find(tweet => tweet._id === action.tweet._id);
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

