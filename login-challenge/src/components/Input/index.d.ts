/**
 * IMPORTS
 */
import {InputHTMLAttributes} from 'react';


/**
 * EXPORTS
 */
export type EnumDictionary<T extends string | symbol | number, U> = {
    [K in T]: U;
};

export enum INPUT_TYPE
{
    PASSWORD = 'PASSWORD',
    EMAIL = 'EMAIL'
}

export interface IInputStylesProps extends InputHTMLAttributes<HTMLInputElement>
{
    isValid: boolean | undefined;
}

export interface IInputProps extends IInputStylesProps
{
    onChangeCallback: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type: INPUT_TYPE;
}
