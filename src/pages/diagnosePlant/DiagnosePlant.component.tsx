import React, { FC } from "react";
import { PageInfo } from "../../components/PageInfo/PageInfo.components";
import { Button } from "../../components/Button/Button.component";
import style from './style.module.scss';

const DiagnosePlant: FC = () => {
    return (
        <div className={style.diagnosePlant}>
            <PageInfo
                className={style.diagnosePlant__info}
                title="Diagnose your plant with Health Check"
                subTitle="Diagnose plant problems before it's too late and provide them with special treatment"
            />
            <Button className={style.diagnosePlant__button}>Continue</Button>
            <div className={style.diagnosePlant__illustr} />
        </div>
    )
}

export default DiagnosePlant;
