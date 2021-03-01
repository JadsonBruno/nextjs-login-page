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
export default function Button ({isLoading,...props}: IButtonProps): JSX.Element
{
    return (
        <Container
            {...props}
            data-testid="submit-button"
        >
            {isLoading === false ?
                <>ENTRAR</>
                :
                <Loading />
            }
        </Container>
    );
}
