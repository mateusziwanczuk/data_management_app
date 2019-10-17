import { AppConstants } from "./app.constants";

export interface ToggleLoading {
    type: AppConstants.TOGGLE_LOADING;
    isLoading: boolean;
}

export const toggleLoading = (isLoading: boolean): ToggleLoading => {
    return {
        type: AppConstants.TOGGLE_LOADING,
        isLoading,
    }
}