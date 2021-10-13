import NavigationSidebarRefactored from "../NavigationSidebarRefactored";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList";

(function ($) {
  $('#wd-explore').append(`
        <div class="row mt-2">
<!--          side bar component-->
          <div class="col-2 col-md-2 col-lg-1 col-xl-2">
              ${NavigationSidebarRefactored('explore')}
          </div>
          <!--          explore component-->
            ${ExploreComponent()}
          <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            ${WhoToFollowList()}
          </div>
          
        </div>
    `);
})($);
