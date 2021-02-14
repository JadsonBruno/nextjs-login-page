/**
 * IMPORTS
 */
import axios from 'axios';


/**
 * CODE
 */

// configure url for apps API
const api = axios.create({
    baseURL: 'https://6027175cdd4afd001754a56e.mockapi.io/wiser/'
});


/**
 * EXPORTS
 */
export default api;
