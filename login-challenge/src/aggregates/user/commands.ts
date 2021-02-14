/**
 * TYPES
 */
import {_aggregates} from '../index.d';
import {IUserLogin} from '../user/commands.d';
import {IUserLogout} from '../user/commands.d';
import {_names} from '../user/commands.d';


/**
 * CODE
 */

/**
 * I am a command creator for user login.
 *
 * :param username: username
 * :param password: user password
 *
 * :returns: user login command
 */
function login (username: string,
                password: string): IUserLogin
{
    return {
        _aggregate: _aggregates.USER,
        _name: _names.USER_LOGIN,
        _target: null,
        password,
        username,
    };
}


/**
 * I am a command creator for user logout.
 *
 * :returns: user logout command
 */
function logout (): IUserLogout
{
    return {
        _aggregate: _aggregates.USER,
        _name: _names.USER_LOGOUT,
        _target: null
    };
}


/**
 * EXPORTS
 */
export {
    login,
    logout,
};
