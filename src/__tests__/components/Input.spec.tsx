import InputComponent from '../../components/Input';
import {theme} from '../../styles/global';
import {ThemeProvider} from 'styled-components';
import {fireEvent} from '@testing-library/react';
import {render} from '@testing-library/react';
import {INPUT_TYPE} from '../../components/Input/index.d';
import {within} from '@testing-library/react';

const changeCallback = jest.fn();

describe("Input component tests", () =>
{
    it("should be able to render an input component", () =>
    {
        // render input component
        const {getByTestId} = render(
            <ThemeProvider
                theme={theme}
            >
                <InputComponent
                    isValid={true}
                    onChangeCallback={changeCallback}
                    placeholder="E-mail"
                    type={INPUT_TYPE.EMAIL}
                />
            </ThemeProvider>
        );

        // get input component from container
        const inputField = getByTestId("input-field");

        // input rendered?
        expect(inputField).toBeTruthy();
    });

    it("should be able to render an invalid input component", () =>
    {
        // render input component
        const {getByTestId} = render(
            <ThemeProvider
                theme={theme}
            >
                <InputComponent
                    isValid={false}
                    onChangeCallback={changeCallback}
                    placeholder="E-mail"
                    type={INPUT_TYPE.EMAIL}
                />
            </ThemeProvider>
        );

        // get input component from container
        const inputField = getByTestId("input-field");

        // get amount of icon erro inside input
        const iconErroButton = within(inputField).getAllByTestId('input-icon-error');

        // icon error rendered?
        expect(iconErroButton.length).toBe(1);
    });

    it("should be able to render a password input component type", () =>
    {
        // define placeholder value
        const placeholder = "****";

        // render input component
        const {getByTestId} = render(
            <ThemeProvider
                theme={theme}
            >
                <InputComponent
                    isValid={false}
                    onChangeCallback={changeCallback}
                    placeholder={placeholder}
                    type={INPUT_TYPE.PASSWORD}
                />
            </ThemeProvider>
        );

        // get input password from container
        const inputPassword = getByTestId("input-field");

        // get input element from password field
        const [inputElement] = inputPassword.getElementsByTagName("input");

        // input element is password type?
        expect(inputElement).toHaveAttribute("type", 'password');

        // input element has defined placeholder?
        expect(inputElement).toHaveAttribute('placeholder', placeholder);
    });

    it("should be able to change input value", async () =>
    {
        // render input component
        const {getByTestId} = render(
            <ThemeProvider
                theme={theme}
            >
                <InputComponent
                    isValid={true}
                    onChangeCallback={changeCallback}
                    placeholder="teste@gmail.com"
                    type={INPUT_TYPE.EMAIL}
                />
            </ThemeProvider>
        );

        // get input password from container
        const inputComponent = getByTestId("input-field");

        // get input element from password field
        const [inputElement] = inputComponent.getElementsByTagName("input");

        // define new input value
        const newInputValue = 'jadson@gmail.com';

        //FIXME: replace the call bellow for @testing-library/user-event
        // fire change event inside input element
        fireEvent.change(inputElement, {target: {value: newInputValue}});

        // change callback called?
        expect(changeCallback).toBeCalled();

        // input element value change?
        expect(inputElement.value).toBe(newInputValue);
    });
});