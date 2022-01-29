import React, { FC } from "react";
import { PageInfo } from "../../components/PageInfo/PageInfo.components";
import { Button } from "../../components/Button/Button.component";
import style from './style.module.scss';

const PlantCare: FC = () => {
    return (
        <div className={style.plantCare}>
            <PageInfo
                className={style.plantCare__info}
                title="Follow plant care tips and daily tasks "
                subTitle="Always stay on top of your gardening routine to keep your green friends happy and healthy"
            />
            <Button className={style.plantCare__button}>Continue</Button>
            <div className={style.plantCare__illustr} />
        </div>
    )
}

export default PlantCare;
