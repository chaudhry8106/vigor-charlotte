import React from "react";

const Nav = () =>
  <nav className="sidebar col-xs-12 col-sm-4 col-lg-3 col-xl-2 bg-faded sidebar-style-1">
    <h1 class="site-title"><a href="/"><em class="fa fa-rocket"></em> Vigor</a></h1>

    <a href="#menu-toggle" class="btn btn-default" id="menu-toggle"><em class="fa fa-bars"></em></a>

    <ul class="nav nav-pills flex-column sidebar-nav">
      <li class="nav-item"><a class="nav-link active" href="/dash"><em class="fa fa-dashboard"></em> Dashboard <span class="sr-only">(current)</span></a></li>
      <li class="nav-item"><a class="nav-link" href="/appointments"><em class="fa fa-calendar-o"></em> Appointments</a></li>
      <li class="nav-item"><a class="nav-link" href="/payments"><em class="fa fa-credit-card-alt"></em> Payments</a></li>
      <li class="nav-item"><a class="nav-link" href="/about"><em class="fa fa-info-circle"></em> About Vigor</a></li>
      <li class="nav-item"><a class="nav-link" href="/contact"><em class="fa fa-globe"></em> Contact Us</a></li>
    </ul>

    <a href="#" class="logout-button"><em class="fa fa-power-off"></em> Signout</a>
  </nav>;

export default Nav;
