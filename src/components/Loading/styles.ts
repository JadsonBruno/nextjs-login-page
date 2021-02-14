/**
 * IMPORTS
 */
import styled from 'styled-components';


/**
 * EXPORTS
 */
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90%;
    width: 100%;
    background-color: inherit;

    .fa-spin {
        animation: fa-spin 1s infinite linear;
        font-size: 3rem;
        color: var(--color-primary);
    }

    @keyframes fa-spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(359deg);
        }
    }
`;
