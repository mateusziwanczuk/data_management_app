import { AnyAction } from "redux";
import { AuthConstants } from "./auth.constants";
import { produce } from "immer";
import { User } from "firebase";

export interface ReduxStore {
    authUser: User | null
}

const initialState: ReduxStore = {
    authUser: null
}

export const authReducer = (state = initialState, action: AnyAction) => 
    produce(state, draftState => {
        switch(action.type){
            case AuthConstants.SIGN_IN:
                draftState.authUser = action.user;
                return;
            case AuthConstants.SIGN_OUT:
                draftState.authUser = null;
            default:
                return state
        }
    })