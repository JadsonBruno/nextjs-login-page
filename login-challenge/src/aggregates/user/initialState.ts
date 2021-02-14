/**
 * IMPORTS
 */
import {IUserState} from './state.d';


/**
 * CODE
 */
const initialState: IUserState = {
    isAuthorized: false,
    isAuthorizing: false,
    loginError: null,
    password: null,
    username: null
};


/**
 * EXPORTS
 */
export default initialState;
