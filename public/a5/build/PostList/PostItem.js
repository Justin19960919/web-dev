const PostItem = (post) => {
  return(`
    <div class="wd-bookmark-sample">
    
      <!-- user-image -->
      <img src=${post.userImg} alt="user-image" class="wd-bookmark-usr-img">

      <!-- user response and post responsed to -->
      <div class="wd-bookmark-user-response">

          <div>
            <!-- user response -->
            <p class="wd-bookmark-otheruser wd-text-white">${post.userName} <span class="wd-text-lightgray wd-text-opacity-half"> @${post.userAccount} . ${post.time}</span></p>
            <p class="wd-bookmark-otheruser-text wd-text-white">${post.response}</p>

            <!-- post and post text -->
            <div class="wd-gray-border wd-rounded-border ">
              <!-- user responsed to post -->
              <img class="wd-bookmark-post-image" src=${post.reference.imgSource} alt="post-image">
              
              <div class="wd-padding-12">
                <p class="wd-bookmark-post-title">${post.reference.title}</p>
                <p class="wd-bookmark-post-text wd-text-opacity-half">
                  ${post.reference.content}
                </p>
              </div>
            </div>

          </div>

          <!-- icons -->
          <div class="wd-icons wd-text-opacity-half">
            
            <!-- comment  -->
            <a href="#" class="wd-icon-spaceout wd-text-lightgray">
              <i class="far fa-comment"></i>
              <span class="wd-icon-space">
                ${post.commentNumber}
              </span>
            </a>


            <!-- retweet  -->
            <a href="#" class="wd-icon-spaceout wd-text-lightgray">
              <i class="fas fa-retweet"></i>
              <span class="wd-icon-space">
                ${post.retweetNumber}
              </span>
            </a>

            <!-- lovenumber  -->
            <a href="#" class="wd-icon-spaceout">
              <i class="fas fa-heart"></i>
              <span class="wd-icon-space">
                ${post.loveNumber}
              </span>
            </a>

            <!-- upload  -->
            <a href="#" class="wd-icon-spaceout wd-text-lightgray">
            <i class="fal fa-upload"></i>
            </a>
          </div>


      </div>

    </div>
  `);
}



export default PostItem;