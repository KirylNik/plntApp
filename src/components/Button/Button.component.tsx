import React, {FC, MouseEvent, PropsWithChildren} from 'react';
import cn from 'classnames';
import style from './style.module.scss';

type TTrivialButtonProps = {
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void,
    disabled?: boolean,
    className?: string
}

export const Button: FC<PropsWithChildren<TTrivialButtonProps>> = ({
    onClick,
    disabled = false,
    className,
    children,
}) => (
    <button
        className={cn(style.button, className)}
        type='button'
        disabled={disabled}
        onClick={onClick}
    >
        {children}
    </button>
);
