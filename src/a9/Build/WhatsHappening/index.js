import "./what.css";
// import lib
import React, {useState} from "react";
import {useDispatch} from "react-redux";

import {postNewTweet} from "../../services/tweetService";


const WhatsHappening = () => {
  const [whatsHappening, setWhatsHappening] = useState("");

  // use dispatch
  const dispatch = useDispatch();

  const tweetTxtAreaHandler = (event) => {
    setWhatsHappening(event.target.value);
  }

  const tweetClickHandler = () => {
    console.log("pressed tweet button..");
    // const action = {
    //   type: 'create-tweet',
    //   tweet: whatsHappening
    // };
    // dispatch(action);

    const newTweet = {
      userName: "random user",
      userImg: "/images/elonMusk.jpg",
      userAccount: "randomUser",
      time: new Date().getDate() + " ",
      response: whatsHappening,
      reference: {
        imgSource: "/images/default.jpg",
        title: "",
        content: ""
      },
      commentNumber: 0,
      retweetNumber: 0,
      loveNumber: 0
    };
    console.log("created nwe tweet in front end react server...");
    postNewTweet(dispatch, newTweet);
    setWhatsHappening("");
  }


  return (
    <div className="row">
      <div className="col-2">
        <img src="/images/elonMusk.jpg" alt="profile-image" className="wd-bookmark-usr-img"/>
      </div>

      <div className="col-10 wd-whatshappening-bottom">
        <textarea className="row wd-whatsHappeningTextArea" placeholder="What's happening?" value={whatsHappening} onChange={tweetTxtAreaHandler}></textarea>

          <span>
            <i className="far fa-image wd-whatshappening-icons"></i>
            <i className="fas fa-chart-line wd-whatshappening-icons"></i>
            <i className="far fa-smile wd-whatshappening-icons"></i>
            <i className="far fa-calendar wd-whatshappening-icons"></i>
          </span>

          <button className="btn btn-primary rounded-pill wd-whatshappening-button" onClick={tweetClickHandler}>
            Tweet
          </button>

      </div>
    </div>
  );
};



export default WhatsHappening;