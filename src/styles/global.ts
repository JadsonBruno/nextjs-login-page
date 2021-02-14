/**
 * IMPORTS
 */
import {createGlobalStyle} from 'styled-components';
import {DefaultTheme} from 'styled-components';


/**
 * EXPORTS
 */
export const theme: DefaultTheme = {
    colors: {
        primary: '#FAF5FF',
        backgroundGradient: 'linear-gradient(0, #130525 0%, rgba(105, 57, 153, 0) 100%)',
        primaryGradient: 'linear-gradient(267.79deg, #383E71 0%, #9D25B0 99.18%)',
        primaryInvertedGradient: 'linear-gradient(267.79deg, #9D25B0 0%, #383E71 99.18%)',
        title: '#383E71',
        text: '#989FDB',
        link: '#9D25B0',
        error: '#FF377F'
    },
    font: {
        family: 'Montserrat',
    },
    style: {
        borderValid: '1px solid #989FDB',
        borderInvalid: '1px solid #FF377F'
    }
};


export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        outline: 0;
        padding: 0;
    }
    html {
        font-size: 62.5%;

        @media(max-width: 1535px) {
            font-size: 58%;
        }

        @media(max-width: 1080px) {
            font-size: 54%;
        }

        ::-webkit-scrollbar {
            width: 4px !important;
            height: 4px !important;
        }

        ::-webkit-scrollbar-thumb {
            background-color: var(--color-primary) !important;
        }

        ::-webkit-scrollbar-track {
            background: transparent !important;
        }

    }
    html, body, #root {
        min-height: 100%;
    }
    #root {
        --color-primary: #FAF5FF;
        --color-background-gradient: ;
        --color-primary-gradient: ;
        --color-text: #989FDB;
        --color-title: #383E71;
        --font-family-name: 'Montserrat';
    }
    body {
        -webkit-font-smoothing: antialiased !important;
    }
    body, input, button, p, span {
        font-family: var(--font-family-name), sans-serif;
    }
    h1, h2, h3, h4, h5, h6
    {
        margin-bottom: 0;
    }
`;
