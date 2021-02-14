/**
 * EXPORTS
 */
export enum loginErrors
{
    AUTHENTICATION = 'authentication',
    UNKNOWN = 'unknown'
}

export interface INotification extends NotificationOptions
{
    title: string;
}

export interface IUserState
{
    isAuthorized: boolean;
    isAuthorizing: boolean;
    loginError: loginErrors | null;
    password: string | null;
    username: string | number | null;
}

export interface IResponseData
{
    id: string;
    email: string;
    password: string;
}