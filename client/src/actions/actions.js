const url = "http://localhost:8000";
const apiUrl = "http://localhost:8000/api";

export function signupAction(data) {
    return (dispatch) => {
        fetch(`${apiUrl}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.message) {
                    dispatch({type: 'SIGNUP_SUCESS', data: data.message})
                } else {
                    dispatch({type: 'SIGNUP_ERR'})
                }

            })
    }
}

export function loginAction(data) {
    return (dispatch) => {
        return fetch(`${apiUrl}/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: data.userName, password: data.password})
        })
            .then(res => res.json())
    }
}

export const getLoggedinUserData = (data) => {
    return (dispatch) => {
        dispatch({type: 'ISLOGGEDINDATA', data})
    }
}


export function createPostAction(data) {
    return dispatch => {
        fetch(`${apiUrl}/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    dispatch({
                        type: "CREATE_POST",
                        data
                    });
                }
            });
    };
}

export function updatePostAction(data) {
    return dispatch => {
        fetch(`${apiUrl}/create`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    dispatch({
                        type: "ALL_POSTS",
                        data
                    });
                }
            });
    };
}

export function getAllPostsAction() {
    return dispatch => {
        fetch(`${apiUrl}/posts`)
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    dispatch({
                        type: "ALL_POSTS",
                        data
                    });
                }
            });
    };
}

export function getSinglePostAction(id) {
    console.log(id, "in action 1");
    return dispatch => {
        fetch(`${apiUrl}/posts/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    dispatch({
                        type: "SINGLE_POST",
                        data
                    });
                }
            })
    };
}

export function createCommentAction(data) {
    return dispatch => {
        fetch(`${baseUrl}/posts/${data.id}/comment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    dispatch({
                        type: "ALL_CURRENT_COMMENTS",
                        data
                    });
                }
            });
    };
}

export function getAllComments(id) {
    return dispatch => {
        fetch(`${apiUrl}/${id}/comments`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    dispatch({
                        type: "ALL_CURRENT_COMMENTS",
                        data
                    });
                }
            });
    };

}

