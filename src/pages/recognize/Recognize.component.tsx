import React from "react";
import PageInfo from "../../components/PageInfo/PageInfo.components";
import Button from "../../components/Button/Button.component";
import style from './style.module.scss';
import {TPageComponent} from "../../types/app.types";
import {PAGES} from "../../enums/pages.enum";

const Recognize: TPageComponent = ({ goToPage }) => {
    return (
        <div className={style.recognize}>
            <PageInfo
                className={style.recognize__info}
                title="Recognize trees, weeds, grass, and flowers around the world"
                subTitle="Discover the amazing nature with PLNT and never miss its miracles"
            />
            <Button
                className={style.recognize__button}
                onClick={() => goToPage(PAGES.LEARN_TOXIC)}
            >
                Continue
            </Button>
            <div className={style.recognize__illustr} />
        </div>
    )
}

export default Recognize;
