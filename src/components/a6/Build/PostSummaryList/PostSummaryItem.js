/*
topic
userName
time
title
image
*/
import React from "react";



const PostSummaryItem = ({post}) => {
  return (
            <div className="row wd-tweet wd-light-gray-border-upper">
              <div className="col-9">
                <p className="wd-light-gray wd-opacity-70">{post.topic}</p>
                <p className="font-weight-bolder">{post.userName} <i className="fas fa-check-circle wd-verifed-fa"></i><span className="wd-light-grey"> - {post.time}</span></p>
                <p className="font-weight-bolder">
                  {post.title}
                </p>
              </div>

              <div className="col-3 align-self-center justify-content-center">
                <img className="wd-tweet-img" src={post.image} alt="react icon"/>
              </div>

            </div>
  )
}


export default PostSummaryItem;