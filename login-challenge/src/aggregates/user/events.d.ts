/**
 * IMPORTS
 */
import {IEvent} from '../index.d';
import {_aggregates} from '../index.d';
import {loginErrors} from './state.d';


/**
 * EXPORTS
 */
export enum types
{
    USER_LOGGED_IN = 'USER_LOGGED_IN',
    USER_LOGGED_OUT = 'USER_LOGGED_OUT',
    USER_LOGGING_OUT = 'USER_LOGGING_OUT',
    USER_LOGGING_IN = 'USER_LOGGING_IN',
    USER_NOT_LOGGED_IN = 'USER_NOT_LOGGED_IN',
}

export interface IUserLoggedIn extends IEvent
{
    _aggregate: _aggregates.USER;
    _name: types.USER_LOGGED_IN;
    type: types.USER_LOGGED_IN;
}

export interface IUserLoggingOut extends IEvent
{
    _aggregate: _aggregates.USER;
    _name: types.USER_LOGGING_OUT;
    type: types.USER_LOGGING_OUT;
}

export interface IUserLoggedOut extends IEvent
{
    _aggregate: _aggregates.USER;
    _name: types.USER_LOGGED_OUT;
    type: types.USER_LOGGED_OUT;
}

export interface IUserLoggingIn extends IEvent
{
    _aggregate: _aggregates.USER;
    _name: types.USER_LOGGING_IN;
    type: types.USER_LOGGING_IN;
}

export interface IUserNotLoggedIn extends IEvent
{
    _aggregate: _aggregates.USER;
    _name: types.USER_NOT_LOGGED_IN;
    reason: loginErrors;
    type: types.USER_NOT_LOGGED_IN;
}
