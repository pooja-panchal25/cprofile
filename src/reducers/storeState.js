import { reducerType } from '@constants';

var initialState = {

}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case reducerType.userData:
            return { ...state, ...action }
        default:
            return { ...state }
    }

}