import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoAction, displayTodosAction } from '../actions/actions';

class DashBoard extends Component {

    state = {
      todo : '',
      currentUserTodosId : ''
    }

componentWillMount() {

  // this.props.displayTodos(this.props.currentUser._id)
 this.props.dispatch(displayTodosAction(this.props.currentUser._id))
    

}
  

  handleChange = (e) => {
    this.setState({
      todo : e.target.value
    })
  }

  handleClick = () => {
    let obj = {
      todo : this.state.todo,
      done : false
    }
    this.props.addTodo(obj);
  }

  handleClickOnDelete = (e) => {
    console.log(e.target.id)
  }
  
render() {
    const {currentUserTodos} = this.props;
    console.log(currentUserTodos, "currentuserTodos")

    return (
      <div>
        <div>
          <input type="text" placeholder='ToDo' onChange={this.handleChange} />
          <input type='submit' value='Add ToDo' onClick={this.handleClick} />
        </div>
        <ul className='todo-list'>
        {
          (currentUserTodos.length) ?
            currentUserTodos.map((obj, i) => {
              return <li key={i} className='todo-item'> {obj.todo} 
                  <span className='delete-todo right' id={obj._id} onClick={this.handleClickOnDelete}>x</span>
                </li>
            })
          : ''
        }
        </ul>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    currentUser: state.currentUser ,
    currentUserTodos: state.currentUserTodos 
  }
}
 
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    addTodo : (data) => dispatch(addTodoAction(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard) ;