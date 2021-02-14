/**
 * IMPORTS
 */
import {execute} from '../execute';
import * as commands from '../user/commands';
import * as handlers from '../user/handlers';


/**
 * CODE
 */

/**
 * I am an API to login user.
 *
 * :param username: username
 * :param password: user password
 *
 * :returns: promise with nothing
 */
async function login (username: string,
                      password: string): Promise<void>
{
    await execute(commands.login(username, password), handlers.login);
}


/**
 * EXPORTS
 */
export {
    login
};
