import { AuthConstants } from "./auth.constants";

export interface SetUser {
    type: AuthConstants.SIGN_IN;
    user: any;
}

export const setUserAction = (user: any): SetUser => ({
    type: AuthConstants.SIGN_IN,
    user,
});