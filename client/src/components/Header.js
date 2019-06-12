import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import SignInLink from "./links/SignInLink";
import SignOutLink from "./links/SignOutLink";
import { getLoggedinUserData } from "../actions/actions";

class Header extends Component {
  componentWillMount() {}

  render() {
    const { user, currentUser } = this.props;
    const link = user || currentUser ? <SignOutLink /> : <SignInLink />;

    return (
      <div className="header">
        <Link to="/">
          <span className="logo">
            <span className="logo-text">Medium Clone</span>
          </span>
        </Link>
        <nav>{link}</nav>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getData: data => dispatch(getLoggedinUserData(data))
  };
}

function mapStateToProps(state) {
  if (state) {
    return {
      user: state.fetchedUserData.user,
      currentUser: state.currentUser
    };
  } else {
    return {
      user: state
    };
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
