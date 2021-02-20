/**
 * IMPORTS
 */
import {Container} from './styles';
import {Icon} from './styles';


/**
 * TYPES
 */
import {IInputProps} from './index.d';
import {EnumDictionary} from './index.d';
import {INPUT_TYPE} from './index.d';


/**
 * CONSTANTS AND DEFINITIONS
 */
const INPUT_TYPE_DICTIONARY: EnumDictionary<INPUT_TYPE, string> =
{
    [INPUT_TYPE.EMAIL]: 'text',
    [INPUT_TYPE.PASSWORD]: 'password'
}


/**
 * CODE
 */
function Input (
    {
        isValid,
        onChangeCallback,
        placeholder,
        type,
        ...props
    }: IInputProps
): JSX.Element
{
    return (
        <Container
            isValid={isValid}
            data-testid="input-field"
        >
            <input
                type={INPUT_TYPE_DICTIONARY[type]}
                placeholder={placeholder}
                onChange={onChangeCallback}
                {...props}
            />
            {(isValid !== undefined && isValid === false) &&
                <Icon
                    data-testid="input-icon-error"
                    src="/images/x.svg"
                />
            }
        </Container>
    );
}


/**
 * EXPORTS
 */
export default Input;
