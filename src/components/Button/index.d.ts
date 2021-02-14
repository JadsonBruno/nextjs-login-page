/**
 * IMPORTS
 */
import {ButtonHTMLAttributes} from 'react';


/**
 * EXPORTS
 */
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>
{
    isLoading: boolean;
}
