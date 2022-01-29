import React, { FC } from "react";
import { PageInfo } from "../../components/PageInfo/PageInfo.components";
import { Button } from "../../components/Button/Button.component";
import style from './style.module.scss';

export const IdentifyPlant: FC = () => {
    return (
        <div className={style.identifyPlant}>
            <PageInfo
                className={style.identifyPlant__info}
                title="Instantly identify any plant with high accuracy"
                subTitle="Easily scan any plants and get immediate information about them"
            />
            <Button className={style.identifyPlant__button}>Get Started</Button>
            <div className={style.identifyPlant__illustr} />
        </div>
    )
}
