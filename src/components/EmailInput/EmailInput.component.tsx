import React, {FC, useState} from "react";
import Input from "../Input/Input.component";

type TEmailInputProps = {
    isValid?: boolean,
    onStatusChange?: (isValid: boolean) => void,
    className?: string
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EmailInput: FC<TEmailInputProps> = ({ isValid, onStatusChange, className}) => {
    const [value, setValue] = useState('');
    const onChange = (value: string) => {
        setValue(value);
        onStatusChange && onStatusChange(Boolean(emailRegExp.exec(value)));
    };

    return (
        <Input
            className={className}
            value={value}
            label="EMAIL ADDRESS"
            isValid={isValid}
            onChange={onChange}
        />
    )
}

export default EmailInput
