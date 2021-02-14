/**
 * IMPORTS
 */
import 'styled-components';


/**
 * CODE
 */
interface Colors
{
    primary: string;
    backgroundGradient: string;
    primaryGradient: string;
    primaryInvertedGradient: string;
    title: string;
    text: string;
    link: string;
    error: string;
}

interface Font
{
    family: string;
}

interface Style
{
    borderValid: string;
    borderInvalid: string;
}

declare module 'styled-components'
{
    export interface DefaultTheme
    {
        colors: Colors;
        font: Font;
        style: Style;
    }
}