const url = "http://localhost:8000";
const apiUrl = "http://localhost:8000/api";

export function signupAction(data) {
  return (dispatch) => {
    fetch(`${apiUrl}/signup`, {
      method : "POST", 
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(data)
    }).then(res => res.json())
    .then(data => {
      if(data.message) {
        dispatch({ type : 'SIGNUP_SUCESS', data: data.message })
      } else {
        dispatch({ type : 'SIGNUP_ERR' })
      }
      
    })
  }
}

export function loginAction(data) {
  return (dispatch) => {
    return fetch(`${apiUrl}/login`, {
      method : 'POST',
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({ username: data.userName, password: data.password })
    })
    .then(res => res.json())
  }
}

export const getLoggedinUserData = (data) => {
  return(dispatch) => {
    dispatch({type: 'ISLOGGEDINDATA', data})
  }
}

export function addTodoAction(data) {
  return (dispatch) => {
    fetch(`${apiUrl}/addTodo`, {
      method : 'POST',
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({ data })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data, " add todo data")
      dispatch({ type : 'ADD_TODO', data: data[0].todoList})  
    })
  }
}

export function displayTodosAction(id) {
  return(dispatch) => {
    fetch(`${url}/${id}/todos`)
    .then(res => res.json())
    .then(data => {
      dispatch({ type : 'DISPLAY_TODOS', data: data.data })
    })
  }
}

