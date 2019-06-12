import React, { Component } from "react";
import { connect } from "react-redux";

class SignOutLink extends Component {
  render() {
    const { user, currentUser } = this.props;
    const name = currentUser ? currentUser.name : user.name;
    var sName = "";
    name.split(" ").forEach(element => {
      sName += element[0];
    });

    return (
      <nav className="right">
        <span className="link-btn userName-logo"> {sName} </span>
        <a href="/logout" className="btn link-btn">
          {" "}
          Logout{" "}
        </a>
      </nav>
    );
  }
}

function mapStatettoProps(state) {
  return {
    user: state.fetchedUserData.user,
    currentUser: state.currentUser
  };
}

export default connect(mapStatettoProps)(SignOutLink);
