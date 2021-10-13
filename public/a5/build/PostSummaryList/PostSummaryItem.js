/*
topic
userName
time
title
image
*/
const PostSummaryItem = (post) => {
  return (`  
            <div class="row wd-tweet wd-light-gray-border-upper">
              <div class="col-9">
                <p class="wd-light-gray wd-opacity-70">${post.topic}</p>
                <p class="font-weight-bolder">${post.userName} <i class="fas fa-check-circle wd-verifed-fa"></i><span class="wd-light-grey"> - ${post.time}</span></p>
                <p class="font-weight-bolder">
                  ${post.title}
                </p>
              </div>

              <div class="col-3 align-self-center justify-content-center">
                <img class="wd-tweet-img" src=${post.image} alt="react icon">
              </div>
            </div>
  `);
}


export default PostSummaryItem;