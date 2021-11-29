import React from "react";
/*
who.avatarIcon
who.userName
who.handle
*/
// src/components/a6/

const WhoToFollowItem = ({
  who = {
    avatarIcon: "/images/nasa.png",
    userName: "NASA",
    handle: "NASA"
  }
}) => {
  return(
            <li className="list-group-item">
              <div className="row">
                <div className="col-xl-2 col-lg-4 align-middle">
                  <img className="wd-recommend-companies" src={who.avatarIcon}/>
                </div>

                <div className="col-xl-7 col-lg-4 align-middle">
                  <p>
                    <span className="font-weight-bolder">{who.userName}</span>
                    <i className="fas fa-check-circle wd-verifed-fa"></i>
                    <br/>
                    @{who.handle}
                  </p>
                </div>

                <div className="col-xl-3 col-lg-4 align-middle">
                  <button className="btn btn-primary wd-follow-button">Follow</button>
                </div>
              </div>
            </li>  
  );
}



export default WhoToFollowItem;