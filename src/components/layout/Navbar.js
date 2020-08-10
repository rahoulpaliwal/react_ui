import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return (
        <div className="navbar-fixed">
          <ul id="menu" className="dropdown-content">
            <li><Link to="#">Account</Link></li>
            <li><Link to="#">Settings</Link></li>
            <li className="divider"></li>
            <li><Link to="#" onClick={this.onLogoutClick}>Logout</Link></li>
          </ul>
          <nav className="z-depth-0">
            <div className="nav-wrapper blue">
              <div className="container">
                <Link to="/" style={{ fontFamily: "monospace", paddingTop:"1%"}} className="col s5 brand-logo left black-text">
                  <img src={"glossaread.png"} width="150" height="auto" />
                </Link>
                <ul className="right hide-on-med-and-down dark">
                  <li><Link className="dropdownTrigger" to="#!" data-target="menu">Account<i className="material-icons right">arrow_drop_down</i></Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
    );
  }
}
export default Navbar;