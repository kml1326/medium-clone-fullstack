const initState = {
  currentUserTodos: [],
  currentUser: null,
  fetchedUserData: {},
  allPosts: null,
  currentSinglePost: null,
  currentComments: null,
  message: ""
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCESS":
      return {
        ...state,
        message: action.data
      };
    case "SIGNUP_ERR":
      return {
        ...state,
        message: action.data
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        currentUser: action.data,
        message: ""
      };
    case "LOGIN_ERR":
      return {
        ...state,
        message: action.data.message
      };
    case "ISLOGGEDINDATA":
      return {
        ...state,
        fetchedUserData: action.data
      };
    case "ALL_POSTS":
      return {
        ...state,
        allPosts: action.data
      };
    case "CREATE_POST":
      return {
        ...state,
        allPosts: action.data
      };
    case "SINGLE_POST":
      return {
        ...state,
        currentSinglePost: action.data
      };
    case "ALL_CURRENT_COMMENTS":
      return {
        ...state,
        currentComments: action.data
      };
    default:
      break;
  }
};

export default rootReducer;
