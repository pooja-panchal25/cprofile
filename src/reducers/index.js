import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import redState from './storeState';

const navReducer = (state, action) => {
    return state
}
export default () => {
    const rootReducer = combineReducers({ redState: redState })
    return createStore(rootReducer, applyMiddleware(thunk))
}