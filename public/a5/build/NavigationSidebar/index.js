const NavigationSidebar = () => {
  return(`
            <div class="list-group">
<!--                twitter -->
                <a class="list-group-item" href="#">
                    <i class="fab fa-twitter"></i>
                </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-home wd-float me-2"></i>
              <span class="d-none d-xl-block">
                Home
              </span>
            </a>
            <a href="#" class="list-group-item list-group-item-action active">
              <i class="fas fa-hashtag wd-float me-2"></i>
              <span class="d-none d-xl-block">
                Explore
              </span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-bell wd-float me-2"></i>
              <span class="d-none d-xl-block">
                Notifications
              </span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-envelope wd-float me-2"></i>
              <span class="d-none d-xl-block">
                Messages
              </span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-bookmark wd-float me-2"></i>
              <span class="d-none d-xl-block">
                Bookmarks
              </span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-list wd-float me-2"></i>
              <span class="d-none d-xl-block">
                Lists
              </span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-user wd-float me-2"></i>
              <span class="d-none d-xl-block">
                Profile
              </span>
            </a>
            <a href="#" class="list-group-item list-group-item-action">
              <i class="fas fa-info-circle wd-float me-2"></i>
              <span class="d-none d-xl-block">
                More
              </span>
            </a>
            </div>
            
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet
                </a>
            </div>
    `);
}

export default NavigationSidebar;
