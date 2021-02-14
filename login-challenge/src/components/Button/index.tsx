/**
 * IMPORTS
 */
import {Container} from './styles';
import Loading from '../Loading';


/**
 * TYPES
 */
import {IButtonProps} from './index.d';


/**
 * CODE
 */
export function Button ({isLoading,...props}: IButtonProps): JSX.Element
{
    return (
        <Container
            {...props}
        >
            {isLoading === false ?
                <>ENTRAR</>
                :
                <Loading />
            }
        </Container>
    );
}
