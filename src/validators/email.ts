/**
 * IMPORTS
 */
import * as Yup from 'yup';


/**
 * EXPORTS
 */
export default Yup.object().shape({
    email: Yup.string().email().required()
});
