import ButtonComponent from '../../components/Button';
import {theme} from '../../styles/global';
import {ThemeProvider} from 'styled-components';
import {render} from '@testing-library/react';
import {within} from '@testing-library/react';

describe('Button component tests', () =>
{
    it ('should be able to render a button component', () =>
    {
        // render button component
        const {getByTestId} = render(
            <ThemeProvider
                theme={theme}
            >
                <ButtonComponent
                    isLoading={false}
                />
            </ThemeProvider>
        );

        // get button component from container
        const button = getByTestId('submit-button');

        // button rendered?
        expect(button).toBeTruthy();
    });

    it ('should be able to render a button loading', () =>
    {
        // render button component
        const {getByTestId} = render(
            <ThemeProvider
                theme={theme}
            >
                <ButtonComponent
                    isLoading={true}
                />
            </ThemeProvider>
        );

        // get button component from container
        const button = getByTestId('submit-button');

        // get amount of loading icons inside button
        const loadingInButton = within(button).getAllByTestId('loading-icon');

        // there is a loading icon inside button?
        expect(loadingInButton.length).toBe(1);
    });
});
