/**
 * IMPORTS
 */
import {ICommand} from '../index.d';
import {_aggregates} from '../index.d';


/**
 * EXPORTS
 */
export enum _names
{
    USER_LOGIN = 'USER_LOGIN',
    USER_LOGOUT = 'USER_LOGOUT',
}

export interface IUserLogin extends ICommand
{
    _aggregate: _aggregates.USER;
    _name: _names.USER_LOGIN;
    password: string;
    username: string;
}

export interface IUserLogout extends ICommand
{
    _aggregate: _aggregates.USER;
    _name: _names.USER_LOGOUT;
}
