import React from "react";
import PageInfo from "../../components/PageInfo/PageInfo.components";
import Button from "../../components/Button/Button.component";
import style from './style.module.scss';
import {TPageComponent} from "../../types/app.types";
import {PAGES} from "../../enums/pages.enum";

const PlantCare: TPageComponent = ({goToPage}) => {
    return (
        <div className={style.plantCare}>
            <PageInfo
                className={style.plantCare__info}
                title="Follow plant care tips and daily tasks "
                subTitle="Always stay on top of your gardening routine to keep your green friends happy and healthy"
            />
            <Button
                className={style.plantCare__button}
                onClick={() => goToPage(PAGES.MAKE_EASY)}
            >
                Continue
            </Button>
            <div className={style.plantCare__illustr} />
        </div>
    )
}

export default PlantCare;
