import {
    USERS_REQUEST_SUCCEEDED,
    USERS_REQUEST_FAILED,
    USERS_REQUEST_IN_PROGRESS,
    USER_SELECTED
} from '../actions'


const initialState = {
    users:[],
    requestInProgress: false,
    hasError: false,
    error: {},
    selectedUser: null
}

export default (state = initialState, action) => {
    switch (action.type) {

        case USERS_REQUEST_IN_PROGRESS:
            return{
                ...state,
                hasError: false,
                error: {},
                requestInProgress:true
            }
            break;
        case USERS_REQUEST_SUCCEEDED:

            return{
                ...state,
                hasError:false,
                error:{},
                requestInProgress:false,
                users: action.payload.users
            }
            break;
        case USERS_REQUEST_FAILED:
            return{
                ...state,
                hasError: true,
                requestInProgress: false,
                error:action.error
            }
            break;
        case USER_SELECTED:
            return{
                ...state,
                selectedUser: action.selectedUser
            }
            break;
        default: return state;
    }
}

