import { authReducer } from "../auth/auth.reducer";
import { combineReducers } from "redux";
import { User } from "firebase";

export interface ReduxStore {
    auth: {
        authUser: User | null
    }
}

export const rootReducer = combineReducers<ReduxStore>({
    auth: authReducer,
})