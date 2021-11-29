const profile = (state = {}, action) => {
  switch(action.type){
    case 'get-profile-by-id':
      return action.profile;

    case "modify-profile-by-id":
      // const newProfile = action.profile;
      // // console.log(`modifed profile is sent to reducer: ${newProfile}`);
      // const nameResult = splitName(newProfile.fullName);
      // const modifiedProfile = {
      //   ...state,
      //   firstName: nameResult[0],
      //   lastName: nameResult[1],
      //   bio: newProfile.bio,
      //   location: newProfile.location,
      //   website: newProfile.website
      // };
      // // console.log(`modified profile: ${modifiedProfile}`);
      // return modifiedProfile;
      return action.profile;
    default:
      return state;
  }
}


export default profile;


