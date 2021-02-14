/**
 * IMPORTS
 */
import Store from '../store';


/**
 * TYPES
 */
import {IHandler} from './index.d';


/**
 * CODE
 *
/**
 * I execute a command.
 *
 * :param command: command to be executed
 * :param handler: handler that executes the given command
 *
 * :returns: promise with nothing
 */
async function execute<C> (command: C, handler: IHandler<C>): Promise<void>
{
    for await (const event of handler(command, Store.getState()))
    {
        Store.dispatch(event);
    }
}


/**
 * EXPORTS
 */
export {
    execute
};
