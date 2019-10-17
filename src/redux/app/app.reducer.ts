import { authReducer } from "../auth/auth.reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers<any>({
    auth: authReducer,
})