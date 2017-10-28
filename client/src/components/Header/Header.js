import React from "react";

const Header = ({children}) =>
<header className="page-header row justify-center">
    <div className="col-md-6 col-lg-8" >
     {children}
    </div>

    <div className="dropdown user-dropdown col-md-6 col-lg-4 text-center text-md-right">
      <a className="btn btn-stripped dropdown-toggle" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src="images/profile-pic.jpg" alt="profile photo" className="circle float-left profile-photo" width="50" height="auto"></img>
        <div className="username mt-1">
          <h4 className="mb-1">Username</h4>
          <h6 className="text-muted">Super Admin</h6>
				</div>
        <div className="dropdown-menu dropdown-menu-right" style={{marginRight: 1.5 + 'em'}} aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="#"><em class="fa fa-user-circle mr-1"></em> View Profile</a>
          <a class="dropdown-item" href="#"><em class="fa fa-sliders mr-1"></em> Preferences</a>
          <a class="dropdown-item" href="#"><em class="fa fa-power-off mr-1"></em> Logout</a>
        </div>
      </a>
    </div>
    <div class="clear"></div>
    <a href="#menu-toggle" className="btn btn-default" id="menu-toggle"><em className="fa fa-bars"></em></a>
</header>;

export default Header;
