
/**
 * IMPORTS
 */
import {Action} from 'redux';
import {IUserState} from './user/state.d';


/**
 * EXPORTS
 */

// aggregates names
export enum _aggregates
{
    USER = 'user'
}

// application state interface
export interface IAppState
{
    user: IUserState;
}

// command interface
export interface ICommand
{
    _aggregate: string;
    _name: string;
    _target: number | string | null;
}

// command creator interface
export interface ICommandCreator<C>
{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...args: any[]): C;
}

// event interface
export interface IEvent extends Action
{
    _aggregate: string;
    _name: string;
    _target: number | string | null;
    type: string;
}

// event creator interface
export interface IEventCreator<E>
{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (...args: any[]): E;
}

// command handler interface
export interface IHandler<C>
{
    (command: C, state: IAppState): AsyncIterable<IEvent>;
}
