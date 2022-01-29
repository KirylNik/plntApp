import React, {FC} from "react";
import cn from 'classnames';
import style from './style.module.scss';

type TInputProps = {
    value: string,
    label?: string,
    isValid?: boolean,
    onChange: (value: string) => void,
    className?: string
}

const Input: FC<TInputProps> = ({
    value,
    label,
    isValid,
    onChange,
    className
}) => {
    return (
        <div className={cn(style.inputContainer, className, isValid && style.valid)}>
            {label && <label htmlFor="">{label}</label>}
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}

export default Input;
