import React, { FC } from "react";
import style from './style.module.scss';
import {ReactComponent as A} from '../../assets/svg/a.svg';

type TMainLayoutProps = {
    title: string,
    subTitle: string
}

export const MainLayout: FC<TMainLayoutProps> = ({ title, subTitle }) => {
    return (
        <main className={style.mainLayout}>
            <div className={style.content}>
                <h1>{title}</h1>
                <h2>{subTitle}</h2>
                <button>Get Started</button>
                <A />
            </div>
        </main>
    )
}
