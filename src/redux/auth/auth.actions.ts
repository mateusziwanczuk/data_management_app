import { AuthConstants } from "./auth.constants";
import { User } from "firebase";

export interface SetUser {
    type: AuthConstants.SIGN_IN;
    user: User | null;
}

export const setUserAction = (user: User | null): SetUser => ({
    type: AuthConstants.SIGN_IN,
    user,
});