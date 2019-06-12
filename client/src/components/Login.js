import React, { Component } from 'react';
import PropTypes from "prop-types";
import { loginAction } from '../actions/actions';
import { connect } from 'react-redux';
import { getLoggedinUserData } from '../actions/actions';

class Login extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  state = {
    userName : '',
    password : ''
  }

  componentWillMount() {
    fetch('http://localhost:8000/api/isLoggedin')
    .then(res => res.json())
    .then(data => {
      this.props.getData(data);
    }) 
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state).then(data => {
      if(data.user) {
        console.log('data', data)
        this.props.dispatch({type: 'LOGIN_SUCCESS', data: data.user })
        this.context.router.history.push("/dashboard");
      } else {
        this.props.dispatch({ type: 'LOGIN_ERR', data })
      }    
    });
  }

  render() {

    const {fetchedData, currentUser} = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit} className='login' >
        <input name='userName' type='text' placeholder='userName' className='input' onChange={this.handleChange} />
        <input name='password' type='password' placeholder='password' className='input' onChange={this.handleChange} />
        <input type='submit' value='Login' onClick={this.handleSubmit} className='btn' />
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    login : (data) => dispatch(loginAction(data)),
    getData : (data) => dispatch(getLoggedinUserData(data)),
  }
}

function mapStateToProps(state) {
  if(state) {
      return {
        currentUser: state.currentUser,
        fetchedData: state.fetchedUserData.user
    }
  } else {
    return {
      currentUser : state
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login) ;