import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class SignOutLink extends Component {
  render() {
    const name = this.props.user.name;
    var sName = '';
    name.split(' ').forEach(element => {
      sName += element[0]
    });

    return (
      <nav className='right'>
        <span className='link-btn userName-logo'> { sName } </span>
        <a href='/logout' className='btn link-btn'> Logout </a>
      </nav>
    )
  }
}

function mapStatettoProps(state) {
  return {
    user : state.fetchedUserData.user
  }
}

export default connect(mapStatettoProps)(SignOutLink) ;