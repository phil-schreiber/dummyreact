import {
    USERS_POSTS_SUCCEEDED,
} from '../actions'

const initialState = {
    usersAndPostsFetched:false,
    userPostList:[]
}
export default (state = initialState, action) => {
    switch (action.type) {

        case USERS_POSTS_SUCCEEDED:
            return{
                ...state,
                usersAndPostsFetched: true,
                userPostList:action.payload.userPostList
            }
            break;

        default: return state;
    }
}