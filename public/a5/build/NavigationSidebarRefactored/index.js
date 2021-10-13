const NavigationSidebarRefactored = (active) => {
  return(`
            <div class="list-group">
                <a class="list-group-item" href="#">
                    <i class="fab fa-twitter"></i>
                </a>
<!--              active links-->
              <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${active === 'home' ? "active" : ""}">
                <i class="fas fa-home wd-float me-2"></i>
                <span class="d-none d-xl-block">
                  Home
                </span>
              </a>
<!--              active links-->              
              <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action ${active === 'explore' ? "active" : ""}">
                <i class="fas fa-hashtag wd-float me-2"></i>
                <span class="d-none d-xl-block">
                  Explore
                </span>
              </a>
              
              <a href="#" class="list-group-item list-group-item-action ${active === 'notifications' ? "active" : ""}">
                <i class="fas fa-bell wd-float me-2"></i>
                <span class="d-none d-xl-block">
                  Notifications
                </span>
              </a>
              
              <a href="#" class="list-group-item list-group-item-action ${active === 'messages' ? "active" : ""}">
                <i class="fas fa-envelope wd-float me-2"></i>
                <span class="d-none d-xl-block">
                  Messages
                </span>
              </a>
              
              <a href="#" class="list-group-item list-group-item-action ${active === 'bookmarks' ? "active" : ""}">
                <i class="fas fa-bookmark wd-float me-2"></i>
                <span class="d-none d-xl-block">
                  Bookmarks
                </span>
              </a>
              
              <a href="#" class="list-group-item list-group-item-action ${active === 'lists' ? "active" : ""}">
                <i class="fas fa-list wd-float me-2"></i>
                <span class="d-none d-xl-block">
                  Lists
                </span>
              </a>
              
              <a href="#" class="list-group-item list-group-item-action ${active === 'profile' ? "active" : ""}">
                <i class="fas fa-user wd-float me-2"></i>
                <span class="d-none d-xl-block">
                  Profile
                </span>
              </a>
              
              <a href="#" class="list-group-item list-group-item-action ${active === 'more' ? "active" : ""}">
                <i class="fas fa-info-circle wd-float me-2"></i>
                <span class="d-none d-xl-block">
                  More
                </span>
              </a>
            </div>
            
            <div class="d-grid mt-2">
                <a href="#"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet
                </a>
            </div>
    `);
}

export default NavigationSidebarRefactored;
