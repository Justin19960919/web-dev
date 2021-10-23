import React from "react";

const PostItem = ({post}) => {
  return(
    <div className="wd-bookmark-sample">
    
      <img src={post.userImg} alt="user-image" className="wd-bookmark-usr-img"/>

      <div className="wd-bookmark-user-response">
          <div>
            <p className="wd-bookmark-otheruser wd-text-white">{post.userName} <span className="wd-text-lightgray wd-text-opacity-half"> @{post.userAccount} . {post.time}</span></p>
            <p className="wd-bookmark-otheruser-text wd-text-white">{post.response}</p>

            <div className="wd-gray-border wd-rounded-border ">
              <img className="wd-bookmark-post-image" src={post.reference.imgSource} alt="post-image"/>
              
              <div className="wd-padding-12">
                <p className="wd-bookmark-post-title">{post.reference.title}</p>
                <p className="wd-bookmark-post-text wd-text-opacity-half">
                  {post.reference.content}
                </p>
              </div>
            </div>
          </div>

          <div className="wd-icons wd-text-opacity-half">
            
            <a href="#" className="wd-icon-spaceout wd-text-lightgray">
              <i className="far fa-comment"></i>
              <span className="wd-icon-space">
                {post.commentNumber}
              </span>
            </a>


            <a href="#" className="wd-icon-spaceout wd-text-lightgray">
              <i className="fas fa-retweet"></i>
              <span className="wd-icon-space">
                {post.retweetNumber}
              </span>
            </a>

            <a href="#" className="wd-icon-spaceout">
              <i className="fas fa-heart"></i>
              <span className="wd-icon-space">
                {post.loveNumber}
              </span>
            </a>

            <a href="#" className="wd-icon-spaceout wd-text-lightgray">
            <i className="fal fa-upload"></i>
            </a>
          </div>

      </div>
    </div>
  );
}


export default PostItem;