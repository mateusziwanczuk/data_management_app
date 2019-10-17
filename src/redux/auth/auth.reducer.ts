import { AnyAction } from "redux";
import { AuthConstants } from "./auth.constants";

export interface ReduxStore {
    authUser: any
}

const initialState: ReduxStore = {
    authUser: null
}

export const authReducer = (state = initialState, action: AnyAction) => {
    switch(action.type){
        case AuthConstants.SIGN_IN:
            return { user: state.authUser = {name: 'Static data from auth reducer'} }
        case AuthConstants.SIGN_OUT:
            return { user: state.authUser = null }
        default:
            return state
    }
}