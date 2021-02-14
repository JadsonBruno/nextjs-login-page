/**
 * IMPORTS
 */
import {AiOutlineLoading} from 'react-icons/ai';
import * as Styles from './styles';


/**
 * CODE
 */

/**
 * I render the loading component.
 *
 * :returns: loading component
 */
function Loading (): JSX.Element
{
    return (
        <Styles.Container>
            <AiOutlineLoading className="fa-spin" />
        </Styles.Container>
    );
}


/**
 * EXPORTS
 */
export default Loading;
