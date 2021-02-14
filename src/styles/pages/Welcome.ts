/**
 * IMPORTS
 */
import styled from 'styled-components';


/**
 * EXPORTS
 */
export const Container = styled.main`
    align-items: center;
    background-color: ${({theme}) => theme.colors.primary};
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100%;


    h1 {
        color: ${({theme}) => theme.colors.title};
        font-family: ${({theme}) => theme.font.family};
    }
`;
