import React, { Component } from 'react';
import  { connect } from 'react-redux';
import './App.scss';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import Header from './components/Header';
import { getLoggedinUserData } from './actions/actions';


class App extends Component {

  componentWillMount() {
    this.setState({ isCheckingUser: true });
    fetch('http://localhost:8000/api/isLoggedin')
    .then(res => res.json())
    .then(data => {
      if(data.user) {
        this.props.dispatch({ type: 'LOGIN_SUCCESS', data: data.user })
      }
      this.props.getData(data);
      this.setState({ isCheckingUser: false })
    })
  }

  // Protected route, if loggedin then render or redirect to '/'
  checkAuth(renderComponent) {
    if(this.props.currentUser) {
      return renderComponent;
    } else {
      if (!this.state.isCheckingUser) {
        return <Redirect to="/" />
      } else {
        return null;
      }
    }
  }

  checkLogin() {
    if(this.props.currentUser) {
      return <Redirect to="/dashboard" />
    } else {
      return <Login />
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="App">
            <Switch>
              <Route exact path='/' render={() => this.checkLogin() } />
              <Route path='/signup' component={Signup} />
              <Route path='/dashboard' render={() => this.checkAuth(<DashBoard />) } />
            </Switch>
          </div>
        </div>

      </BrowserRouter>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    getData : (data) => dispatch(getLoggedinUserData(data))
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state ? state.currentUser : state,
    currentUserTodos: state ? state.currentUserTodos : []
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
