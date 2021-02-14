/**
 * TYPES
 */
import {_aggregates} from '../index.d';
import {IUserLoggedIn} from './events.d';
import {IUserLoggedOut} from './events.d';
import {IUserLoggingIn} from './events.d';
import {IUserLoggingOut} from './events.d';
import {IUserNotLoggedIn} from './events.d';
import {types} from './events.d';
import {loginErrors} from './state.d';


/**
 * CODE
 */

/**
 * I create an user logged in event.
 *
 * :param username: username
 *
 * :returns: user logged in event
 */
function userLoggedIn (username: string): IUserLoggedIn
{
    return {
        _aggregate: _aggregates.USER,
        _name: types.USER_LOGGED_IN,
        _target: username,
        type: types.USER_LOGGED_IN
    };
}


/**
 * I create an user logged out event.
 *
 * :returns: user logged out event
 */
function userLoggedOut (): IUserLoggedOut
{
    return {
        _aggregate: _aggregates.USER,
        _name: types.USER_LOGGED_OUT,
        _target: null,
        type: types.USER_LOGGED_OUT
    };
}


/**
 * I create an user logging in event.
 *
 * :returns: user logging in event
 */
function userLoggingIn (): IUserLoggingIn
{
    return {
        _aggregate: _aggregates.USER,
        _name: types.USER_LOGGING_IN,
        _target: null,
        type: types.USER_LOGGING_IN
    };
}


/**
 * I create an user logging out event.
 *
 * :returns: user logging out event
 */
function userLoggingOut (): IUserLoggingOut
{
    return {
        _aggregate: _aggregates.USER,
        _name: types.USER_LOGGING_OUT,
        _target: null,
        type: types.USER_LOGGING_OUT
    };
}


/**
 * I create an user not logged in event.
 *
 * :param reason: error reason
 *
 * :returns: user not logged in event
 */
function userNotLoggedIn (reason: loginErrors): IUserNotLoggedIn
{
    return {
        _aggregate: _aggregates.USER,
        _name: types.USER_NOT_LOGGED_IN,
        _target: null,
        reason,
        type: types.USER_NOT_LOGGED_IN
    };
}


/**
 * EXPORTS
 */
export {
    userLoggedIn,
    userLoggedOut,
    userLoggingIn,
    userLoggingOut,
    userNotLoggedIn
};
