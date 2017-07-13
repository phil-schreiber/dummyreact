import {
    POSTS_REQUEST_SUCCEEDED,
    POSTS_REQUEST_FAILED,
    POSTS_REQUEST_IN_PROGRESS,
    POST_SELECTED
} from '../actions'


const initialState = {
    posts: [],
    requestInProgress: false,
    hasError: false,
    error: {},
    selectedPost: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case POSTS_REQUEST_IN_PROGRESS:
            return{
                ...state,
                hasError: false,
                error: {},
                requestInProgress:true
            }
            break;
        case POSTS_REQUEST_SUCCEEDED:

            return{
                ...state,
                hasError:false,
                error:{},
                requestInProgress:false,
                posts: action.payload.posts
            }
            break;
        case POSTS_REQUEST_FAILED:
            return{
                ...state,
                hasError: true,
                requestInProgress: false,
                error:action.error
            }
            break;
        case POST_SELECTED:
            return{
                ...state,
                selectedPost: action.selectedPost
            }
            break;

        default: return state;
    }
}

