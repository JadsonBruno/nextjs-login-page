/**
 * IMPORTS
 */
import * as Yup from 'yup';


/**
 * EXPORTS
 */
export default Yup.object().shape({
    password: Yup.string().required()
});
