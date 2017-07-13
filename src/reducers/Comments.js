import {
    COMMENTS_REQUEST_SUCCEEDED,
    COMMENTS_REQUEST_FAILED,
    COMMENTS_REQUEST_IN_PROGRESS

} from '../actions'


const initialState = {
    comments:[],
    requestInProgress: false,
    hasError: false,
    error: {}
}

export default (state = initialState, action) => {
    switch (action.type) {

        case COMMENTS_REQUEST_SUCCEEDED:
            return{
                ...state,
                hasError: false,
                error: {},
                requestInProgress:true,
                comments: action.payload.comments
            }
            break;
        case COMMENTS_REQUEST_FAILED:

            return{
                ...state,
                hasError:false,
                error:{},
                requestInProgress:false

            }
            break;
        case COMMENTS_REQUEST_IN_PROGRESS:
            return{
                ...state,
                hasError: true,
                requestInProgress: false,
                error:action.error
            }
            break;

        default: return state;
    }
}

