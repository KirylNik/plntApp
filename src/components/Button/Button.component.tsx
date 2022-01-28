import React, {FC, MouseEvent, PropsWithChildren} from 'react';
import cn from 'classnames';
import style from './style.module.scss';

type TTrivialButtonProps = {
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void
    className?: string,
}

export const Button: FC<PropsWithChildren<TTrivialButtonProps>> = ({
    onClick,
    className,
    children,
}) => (
    <button
        className={cn(style.button, className)}
        type='button'
        onClick={onClick}
    >
        {children}
    </button>
);
