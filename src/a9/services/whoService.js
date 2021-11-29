const getWhosAPI = "http://localhost:4000/api/whos";

export const fetchAllWhos = (dispatch) => {
  fetch(getWhosAPI)
  .then(response => response.json())
  .then(whos => dispatch({
    type: "fetch-all-whos",
    whos
  }))

}

