const profileData = {
  firstName: "Chieh Lin",
  lastName: "Lee",
  handle: "jclee",
  profilePicture: "/images/profile.jpg",
  bannerPicture: "/images/banner.jpg",
  bio: "MSCS @ Northeastern University, aspiring software engineer",
  website: "https://justin19960919.github.io/personal-site/",
  location: "Seattle",
  dateOfBirth: "09/19/1996",
  dateJoined: "11/2021",
  numTweets: 5196,
  followingCount: 312,
  followersCount: 180
};

const splitName = (fullName) => {
  let arr = fullName.split(" ");
  let firstName, lastName;
  if(arr.length >= 4 || arr.length === 0){
    firstName = "";
    lastName = "";
  }
  if(arr.length == 1){
    firstName = arr[0];
    lastName = "";
  }
  else if(arr.length == 2){
    firstName = arr[0];
    lastName = arr[1];
  }
  else if(arr.length == 3){
    firstName = arr[0] + " " + arr[1];
    lastName = arr[2];
  }
  return [firstName, lastName];
}



const profile = (state = profileData, action) => {
  switch(action.type){
    case "modify-profile":
      const newProfile = action.newProfile;

      const nameResult = splitName(newProfile.fullName);
      console.log(nameResult);

      const modifiedProfile = {
        ...state,
        firstName: nameResult[0],
        lastName: nameResult[1],
        bio: newProfile.bio,
        location: newProfile.location,
        website: newProfile.website
      };
      console.log(modifiedProfile);
      return modifiedProfile;
      break;
    default:
      return state;
      break;
  }
}


export default profile;


