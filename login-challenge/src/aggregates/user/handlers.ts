/**
 * IMPORTS
 */
import * as events from './events';
import {authenticate} from './utils';


/**
 * TYPES
 */
import {IEvent} from '../index.d';
import {IUserLogin} from './commands.d';
import {loginErrors} from './state.d';


/**
 * CODE
 */

/**
 * I am an user login command handler.
 *
 * :param command: user login command
 *
 * :returns: promise with events
 */
async function* login (command: IUserLogin): AsyncIterable<IEvent>
{
    // generate user logging in event
    yield events.userLoggingIn();

    // request authentication
    const result = await authenticate(command.username,
                                              command.password);

    // authentication failed: generate failure event and stop
    if (result === null)
    {
        yield events.userNotLoggedIn(loginErrors.AUTHENTICATION);
        return;
    }

    // generate user authenticated event
    yield events.userLoggedIn(result);
}


/**
 * EXPORTS
 */
export {
    login
};
