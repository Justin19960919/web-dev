import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
  return(
        <div className="col-10 col-sm-10 col-md-10 col-lg-7 col-xl-6 wd-light-gray-border-half">

          <div className="mb-3 wd-search-area">
            <i className="fas fa-search wd-search-icon"></i>
            <input  className="wd-search-bar" type="text" placeholder="Search Twitter"/>

            <i className= "fa fa-cog"></i>

          </div>

            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a className="nav-link active" href="#">For you</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Trending</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link d-sm-block d-none" href="#">Entertaining</a>
              </li>
            </ul>

          <div className="wd-img-div">
            <img className="img-fluid" src="/images/spaceX.jpg"></img>
            <p className="wd-img-txt wd-img-txt-title">SpaceX's Starship</p>
          </div>
          
          <PostSummaryList/>
        </div>
  )
}


export default ExploreComponent;