const profileAPI = "http://localhost:4000/api/profile";
const currentUserProfile = "61a45262c014ebc145cc1cb4";


export const getCurrentProfile = (dispatch) => {
  fetch(`${profileAPI}/${currentUserProfile}`)
    .then(response => response.json())
    .then(profile => dispatch({
      type: 'get-profile-by-id',
      profile
    }))
}


export const updateCurrentProfile = (dispatch, profile) => {
  fetch(`${profileAPI}/${currentUserProfile}`, {
    method: "PUT",
    body: JSON.stringify(profile),
    headers: {
      "content-type": "application/json"
    }
  })
    .then(response => dispatch({
      type: "modify-profile-by-id",
      profile
      })
    );
}

