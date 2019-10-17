import { authReducer, AuthStore } from "../auth/auth.reducer";
import { combineReducers } from "redux";
import { AppConstants } from "./app.constants";
import { ToggleLoading } from "./app.actions";
import produce from "immer";

export interface ReduxStore {
    auth: AuthStore
    app: AppStore
}

export interface AppStore {
    isLoading: boolean;
}

type AppActions = ToggleLoading 

const initialState: AppStore = {
    isLoading: false
}

export const appReducer = (state = initialState, action: AppActions) =>
    produce(state, draftState => {
        switch (action.type) {
            case AppConstants.TOGGLE_LOADING:
                draftState.isLoading = action.isLoading;
                return;
        }
    })

export const rootReducer = combineReducers<ReduxStore>({
    auth: authReducer,
    app: appReducer,
})