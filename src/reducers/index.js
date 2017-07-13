import { combineReducers } from 'redux'

import Posts from './Posts'
import Users from './Users'
import Comments from './Comments'
import General from './General'


export const reducers = combineReducers({
    Posts,
    Users,
    Comments,
    General
})