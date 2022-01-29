import React, { FC } from "react";
import { PageInfo } from "../../components/PageInfo/PageInfo.components";
import { Button } from "../../components/Button/Button.component";
import style from './style.module.scss';

const LearnToxic: FC = () => {
    return (
        <div className={style.learnToxic}>
            <PageInfo
                className={style.learnToxic__info}
                title="Learn whether your plant is toxic to pets or causes allergy"
                subTitle="Grow your garden wisely and stay away from plants that are harmful to health"
            />
            <Button className={style.learnToxic__button}>Continue</Button>
            <div className={style.learnToxic__illustr} />
        </div>
    )
}

export default LearnToxic;
