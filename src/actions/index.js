import { getPosts,getUsers, getComments, postComment } from '../helpers/apiClient'

export const POSTS_REQUEST_SUCCEEDED = 'POSTS_REQUEST_SUCCEEDED'
export const POSTS_REQUEST_FAILED = 'POSTS_REQUEST_FAILED'
export const POSTS_REQUEST_IN_PROGRESS = 'POSTS_REQUEST_IN_PROGRESS'
export const POST_SELECTED = 'POST_SELECTED'

export const USERS_REQUEST_SUCCEEDED = 'USERS_REQUEST_SUCCEEDED'
export const USERS_REQUEST_FAILED = 'USERS_REQUEST_FAILED'
export const USERS_REQUEST_IN_PROGRESS = 'USERS_REQUEST_IN_PROGRESS'
export const USER_SELECTED = 'USER_SELECTED'

export const USERS_POSTS_SUCCEEDED = 'USERS_POSTS_SUCCEEDED'

export const COMMENTS_REQUEST_SUCCEEDED = 'COMMENTS_REQUEST_SUCCEEDED'
export const COMMENTS_REQUEST_FAILED = 'COMMENTS_REQUEST_FAILED'
export const COMMENTS_REQUEST_IN_PROGRESS = 'COMMENTS_REQUEST_IN_PROGRESS'

export const COMMENTS_POST_REQUEST_FAILED = 'COMMENTS_POST_REQUEST_FAILED'
export const COMMENTS_POST_REQUEST_IN_PROGRESS = 'COMMENTS_POST_REQUEST_IN_PROGRESS'
export const COMMENTS_POST_REQUEST_SUCCEEDED = 'COMMENTS_POST_REQUEST_SUCCEEDED'


export const requestPosts = () => (dispatch) => {

    dispatch(requestPostsInProgress)
    return new Promise((resolve, reject) => {
        getPosts()
            .then((response) => {
                resolve(dispatch(requestPostsSucceeded(response)))
            })
            .catch((error) => {
                reject(dispatch(requestPostsFailed(error)))
            })
    })


}

export const requestPostsInProgress = {
    type: POSTS_REQUEST_IN_PROGRESS
}

export const requestPostsSucceeded = posts => {
    return {
        type: POSTS_REQUEST_SUCCEEDED,
        payload: {
            posts
        }
    }
}

export const requestPostsFailed = error => {
    return {
        type: POSTS_REQUEST_FAILED,
        error
    }
}



export const selectPost = selectedPost  => {

    return {
        type: POST_SELECTED,
        selectedPost: selectedPost
    };
}

export const requestUsers = () => (dispatch) => {
    dispatch(requestUsersInProgress)
    return new Promise((resolve, reject) => {
        getUsers()
            .then((response) => {
                resolve(dispatch(requestUsersSucceeded(response)))
            })
            .catch((error) => {
                reject(dispatch(requestsUsersFailed(error)))
            })
    })
}

export const requestUsersInProgress = {
    type: USERS_REQUEST_IN_PROGRESS
}

export const requestUsersSucceeded = users => {
    return {
        type: USERS_REQUEST_SUCCEEDED,
        payload:{
            users
        }
    }
}

export const requestsUsersFailed = error => {
    return {
        type: USERS_REQUEST_FAILED,
        error
    }
}

export const selectUser = selectedUser => {
    console.log(selectedUser);
    return {
        type: USER_SELECTED,
        selectedUser: selectedUser
    }
}

export const requestPostsAndUsersSucceeded = userPostList =>   {
    return {
        type: USERS_POSTS_SUCCEEDED,
        payload: {
            userPostList
        }
    }
}


export const requestUsersAndPosts = () => {
    return dispatch => Promise.all([
        dispatch(requestUsers()),
        dispatch(requestPosts()),
        dispatch(requestComments())
    ]).then((data)=>{
        let mergedComments = data[1].payload.posts.map( function(item){
            let storyComments= data[2].payload.comments.filter(findStoryComments,item);
            let comments=[];
            comments.push(storyComments);
            return { ...item, comments: comments }
        });

        let mergedList = data[0].payload.users.map( function(item){
            let userStories= mergedComments.filter(findUserPosts,item);
                let stories=[];
                stories.push(userStories);
            return { ...item, stories: stories }
        });

        dispatch(requestPostsAndUsersSucceeded(mergedList))
    });
}


function findStoryComments(element,index,array){
    return element.postId === this.id;
}

function findUserPosts(element,index,array){
    return element.userId === this.id;
}

export const requestComments = () => (dispatch) => {

    dispatch(requestCommentsInProgress)
    return new Promise((resolve, reject) => {
        getComments()
            .then((response) => {
                resolve(dispatch(requestCommentsSucceeded(response)))
            })
            .catch((error) => {
                reject(dispatch(requestCommentsFailed(error)))
            })
    })
}

export const requestCommentsInProgress = {
    type: COMMENTS_REQUEST_IN_PROGRESS
}

export const requestCommentsSucceeded = comments => {
    return {
        type: COMMENTS_REQUEST_SUCCEEDED,
        payload: {
            comments
        }
    }
}

export const requestCommentsFailed = error => {
    return {
        type: COMMENTS_REQUEST_FAILED,
        error
    }
}

export const postRequestComments = (data) => (dispatch,data) => {

    dispatch(postRequestCommentsInProgress)
    return new Promise((resolve, reject) => {
        postComment()
            .then((response) => {
                resolve(dispatch(postRequestCommentsSucceeded(response)))
            })
            .catch((error) => {
                reject(dispatch(postRequestCommentsFailed(error)))
            })
    })
}

export const postRequestCommentsInProgress = {
    type: COMMENTS_POST_REQUEST_IN_PROGRESS
}

export const postRequestCommentsSucceeded = comments => {
    return {
        type: COMMENTS_POST_REQUEST_SUCCEEDED,
        payload: {
            comments
        }
    }
}

export const postRequestCommentsFailed = error => {
    return {
        type: COMMENTS_POST_REQUEST_FAILED,
        error
    }
}
