import React, { FC } from "react";
import { PageInfo } from "../../components/PageInfo/PageInfo.components";
import { Button } from "../../components/Button/Button.component";
import style from './style.module.scss';

export const Recognize: FC = () => {
    return (
        <div className={style.recognize}>
            <PageInfo
                className={style.recognize__info}
                title="Recognize trees, weeds, grass, and flowers around the world"
                subTitle="Discover the amazing nature with PLNT and never miss its miracles"
            />
            <Button className={style.recognize__button}>Continue</Button>
            <div className={style.recognize__illustr} />
        </div>
    )
}