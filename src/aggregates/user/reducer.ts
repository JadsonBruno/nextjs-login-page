/**
 * IMPORTS
 */
import initialState from './initialState';
import Store from '../../store';


/**
 * TYPES
 */
import {IUserLoggedIn} from './events.d';
import {IUserNotLoggedIn} from './events.d';
import {types as eventTypes} from './events.d';
import {IUserReducer} from './reducer.d';
import {IUserState} from './state.d';


/**
 * CODE
 */
const eventsMap: IUserReducer = {

    /**
     * I update user state on user logged in event.
     *
     * :param state: user state
     * :param event: user logged in event
     *
     * :returns: user state
     */
    [eventTypes.USER_LOGGED_IN]:
        (state: IUserState | undefined, event: IUserLoggedIn): IUserState =>
        {
            // state is not defined: return initial state
            if (state === undefined)
            {
                return initialState;
            }

            // state is defined: return user state
            return {
                ...state,
                isAuthorized: true,
                isAuthorizing: false,
                loginError: null,
                username: event._target
            };
        },


    /**
     * I update user state when logging in an user.
     *
     * :param state: user state
     * :param event: loggin in user event
     *
     * :returns: user state
     */
    [eventTypes.USER_LOGGING_IN]:
        (state: IUserState | undefined): IUserState =>
        {
            // state is not defined: return initial state
            if (state === undefined)
            {
                return initialState;
            }

            // state is defined: return user state
            return {
                ...state,
                isAuthorizing: true,
                loginError: null
            };
        },


    /**
     * I update user state on user not logged event.
     *
     * :param state: user state
     * :param event: user not logged event
     *
     * :returns: user state
     */
    [eventTypes.USER_NOT_LOGGED_IN]:
        (state: IUserState | undefined, event: IUserNotLoggedIn): IUserState =>
        {
            // state is not defined: return initial state
            if (state === undefined)
            {
                return initialState;
            }

            // state is defined: return user state
            return {
                ...state,
                isAuthorized: false,
                isAuthorizing: false,
                loginError: event.reason
            };
        },
};


// user reducer
const reducer = Store.createReducer(initialState, eventsMap);


/**
 * EXPORTS
 */
export default reducer;
