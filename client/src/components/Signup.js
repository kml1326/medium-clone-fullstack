import React, { Component } from "react";
import { signupAction } from "../actions/actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Signup extends Component {
  state = {
    name: "",
    userName: "",
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signup(this.state);
  };

  render() {
    console.log(this.props.message, "message");
    if (this.props.message) return <Redirect to="/login" />;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="signup">
          <input
            type="text"
            name="name"
            placeholder="name"
            className="input"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="userName"
            placeholder="userName"
            className="input"
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input"
            onChange={this.handleChange}
          />
          <input
            type="submit"
            value="Sign Up"
            className="btn"
            onClick={this.handleSubmit}
          />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dipatch) {
  return {
    signup: data => dipatch(signupAction(data))
  };
}

function mapStateTOProps(state) {
  console.log(state, "state");
  if (state) {
    return {
      message: state.message
    };
  } else {
    return {
      message: state
    };
  }
}

export default connect(
  mapStateTOProps,
  mapDispatchToProps
)(Signup);
