import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
  return(`
        <div class="col-10 col-sm-10 col-md-10 col-lg-7 col-xl-6 wd-light-gray-border-half">
          <div class="mb-3 wd-search-area">
            <!-- search icon -->
            <i class="fas fa-search wd-search-icon"></i>
            <!-- search bar -->
            <input  class="wd-search-bar" type="text" placeholder="Search Twitter">

            <!-- gear -->
            <i class="fa fa-cog"></i>

          </div>

          <!--          tabs-->
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" href="#">For you</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
              </li>
              <li class="nav-item">
                <a class="nav-link d-sm-block d-none" href="#">Entertaining</a>
              </li>
            </ul>
          <div class="wd-img-div">
            <img class="img-fluid" src="../images/spaceX.jpg" alt="popular image">
            <p class="wd-img-txt wd-img-txt-title">SpaceX's Starship</p>
          </div>
          
<!--          post list-->
          ${PostSummaryList()}
          
        </div>
  `)
}


export default ExploreComponent;