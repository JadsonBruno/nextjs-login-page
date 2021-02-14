/**
 * IMPORTS
 */
import styled from 'styled-components';


/**
 * CODE
 */
export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    background:  ${({theme}) => theme.colors.primaryGradient};
    color: #ffffff;

    font-family: ${({theme}) => theme.font.family};
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;

    width: 256px;
    height: 48px;
    box-shadow: 0px 10px 25px #CF99DB;
    border-radius: 8px;
    cursor: pointer;
    border: none;

    &:hover
    {
        background:  ${({theme}) => theme.colors.title};
    }

    @media (max-width: 642px)
    {
        width: 168px;
        box-shadow: none;
    }
`;
