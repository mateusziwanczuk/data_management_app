import { AnyAction } from "redux";

export interface ReduxStore {
    user: {
        name?: string;
    }
}

const initialState: ReduxStore = {
    user: {}
}

export const rootReducer = (state = initialState, action: AnyAction) => {
    switch(action.type){
        case 'SIGN_IN':
            return { user: state.user = {name: 'test'} }
        case 'SIGN_OUT':
            return { user: state.user = {} }
        default:
            return state
    }
}