/**
 * IMPORTS
 */
import api from '../../services/api';


/**
 * TYPES
 */
import {AxiosResponse} from 'axios';
import {IResponseData} from './state.d';


/**
 * CODE
 */

/**
 * I authenticate an user.
 *
 * :param email: user email
 * :param password: user password
 *
 * :returns: promise with authentication response
 */
async function authenticate (email: string,
                             password: string): Promise<string | null>
{
    // request users
    const result: AxiosResponse<IResponseData[]> = await api.get('/user');

    // check if email and password combination are valid
    const valid = validateUser(result.data, email, password);

    // return validation result
    return valid;
}


/**
 * I validate whether an user combination is valid or not.
 *
 * :param email: user email
 * :param password: user password
 *
 * :returns: user email or null
 */
function validateUser (data: IResponseData[], email: string, password: string): string | null
{
    /**
     * DISCLAIMER: this function serves only to imitate the normal 
     * behavior of an authentication service since the mock API does not.
     * Naturally in normal situations this code block would not be present 
     * in the front-end.
     */

    // initialize index element
    let indexElement = -1;

    // check if provided user email exists
    const exists = data.some((e, index) => {
        indexElement = index;
        return e.email === email;
    });

    // provided user email not exists: return null
    if (exists === false)
    {
        return null;
    }

    // provided user email exists: get response password
    const responsePassword = data[indexElement]?.password;

    // passwords match: return authenticated user email
    if (responsePassword === password)
    {
        return data[indexElement].email;
    }

    // passwords don't match: return null
    return null;
}


/**
 * EXPORTS
 */
export {
    authenticate,
};
