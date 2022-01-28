import React, { FC } from "react";
import style from './style.module.scss';
import {ReactComponent as A} from '../../assets/svg/a.svg';
import { Button } from "../Button/Button.component";

type TMainLayoutProps = {
    title: string,
    subTitle: string
}

export const PageInfo: FC<TMainLayoutProps> = ({ title, subTitle }) => {
    return (
        <div className={style.pageInfo}>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            {/*<A />*/}
        </div>
    )
}
