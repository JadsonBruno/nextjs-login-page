/**
 * IMPORTS
 */
import styled from 'styled-components';
import {ThemeProps} from 'styled-components';
import {DefaultTheme} from 'styled-components';


/**
 * EXPORTS
 */
export const Container = styled.main`
    align-items: center;
    display: flex;
    height: 100vh;
    overflow: hidden;
    width: 100%;

    @media (max-width: 642px)
    {
        align-items: flex-start;
        position: relative;
        background-color: #130525;
    }
`;

export const ContentContainer = styled.div`
    align-items: flex-start;
    background-color: ${({theme}) => theme.colors.primary};
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    width: 100%;

    button {
        margin-top: 16px;
        margin-bottom: 8px;
    }

    @media (max-width: 768px)
    {
        align-items: center;
    }

    @media (max-width: 642px)
    {
        background: ${({theme}) => theme.colors.backgroundGradient}, url('/images/mobile.png') no-repeat;
        background-size: cover;
        background-position: center;
        height: 50%;
    }
`;

export const ErrorMessage = styled.p`
    align-items: center;
    color: ${({theme}) => theme.colors.error};
    display: flex;
    font-size: 10px;
    height: 14px;
    line-height: 48px;
    margin-left: 20px;
    margin-top: 8px;

    @media (max-width: 642px)
    {
        margin-bottom: 0px;
    }
`;

export const ForgotContainer = styled.p`
    color: ${({theme}) => theme.colors.text};
    font-size: 14px;
    font-style: normal;
    font-weight: normal;
    height: 40px;
    line-height: 20px;
    margin-top: 24px;
    text-align: center;
    width: 212px;

    a {
        color: ${({theme}) => theme.colors.link};
        text-decoration: underline;
        cursor: pointer;
    }

    a:hover {
        color:  ${({theme}) => theme.colors.title};
    }

    @media (max-width: 642px)
    {
        color: #fff;
        width: 200px;

        a {
            color: #fff;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    align-items: center;

    margin-left: 8.2vw;

    @media (max-width: 768px)
    {
        margin: 0;
    }

    @media (max-width: 642px)
    {
        background-color: #fff;
        width: 311px;
        height: 357px;
        border-radius: 8px;
        position: absolute;

        top: 139px;

        justify-content: center;

        button {
            position: absolute;
            top: 314px;
        }

        ${ForgotContainer} {
            position: absolute;
            top: 378px;
        }
    }
`;

export const ImageContainer = styled.div`
    background-color: ${({theme}: ThemeProps<DefaultTheme>) => theme.colors.primaryGradient};
    display: flex;
    height: 100%;
    overflow: hidden;
    width: 110vw;

    background: ${({theme}) => theme.colors.backgroundGradient}, url('/images/source.png') no-repeat;
    background-position: center;
    background-size: cover;

    @media (max-width: 768px)
    {
        background-position: 50% 0;
        transform: scale(1.1);
        max-height: 100vh;
        width: 74vw;
    }

    @media (max-width: 642px)
    {
        display: none;
    }
`;

export const InputContainer = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    
    @media (max-width: 642px)
    {
        margin-bottom: 8px;
        box-sizing: border-box;
        max-height: 109px;
    }
`;

export const InputTitle = styled.label`
    align-items: center;
    align-self: flex-start;
    color: ${({theme}) => theme.colors.title};
    display: flex;

    font-style: normal;
    font-weight: normal;
    font-size: 10px;

    height: 14px;
    line-height: 48px;
    width: 72px;
    margin: 8px 0px 8px 16px;
`;

export const Instructions = styled.p`
    align-self: flex-start;
    color: ${({theme}) => theme.colors.text};
    display: flex;
    font-family: ${({theme}) => theme.font.family};
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    height: 43px;
    line-height: 20px;
    margin-bottom: 35px;
    width: 222px;

    @media (max-width: 642px)
    {
        align-self: center;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
        margin-bottom: 12px;
        text-align: center;
        width: 255px;
    }
`;

export const Title = styled.h1`
    align-self: flex-start;
    color: ${({theme}) => theme.colors.title};
    display: flex;
    font-family: ${({theme}) => theme.font.family};
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    height: 96px;
    line-height: 48px;
    margin-bottom: 16px;
    width: 231px;

    @media (max-width: 642px)
    {
        align-self: center;
        font-size: 24px;
        height: 64px;
        line-height: 32px;
        justify-self: center;
        text-align: center;
        width: 139px;
    }
`;
