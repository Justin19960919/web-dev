/*
who.avatarIcon
who.userName
who.handle
*/
const WhoToFollowItem = (who) => {
  return(`
            <li class="list-group-item">
              <div class="row">
                <div class="col-xl-2 col-lg-4 align-middle">
                  <img class="wd-recommend-companies" src=${who.avatarIcon} alt="company image">
                </div>

                <div class="col-xl-7 col-lg-4 align-middle">
                  <p>
                    <span class="font-weight-bolder">${who.userName}</span>
                    <i class="fas fa-check-circle wd-verifed-fa"></i><br>
                    @${who.handle}
                  </p>
                </div>

                <div class="col-xl-3 col-lg-4 align-middle">
                  <button class="btn btn-primary wd-follow-button">Follow</button>
                </div>
              </div>
            </li>  
  `);
}



export default WhoToFollowItem;