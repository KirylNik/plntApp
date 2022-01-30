import React from "react";
import PageInfo from "../../components/PageInfo/PageInfo.components";
import Button from "../../components/Button/Button.component";
import style from './style.module.scss';
import {TPageComponent} from "../../types/app.types";
import {PAGES} from "../../enums/pages.enum";

const MakeEasy: TPageComponent = ({goToPage}) => {
    return (
        <div className={style.makeEasy}>
            <PageInfo
                className={style.makeEasy__info}
                title="We make plant growing look easy"
                subTitle="Let’s grow a beautiful garden full of happy and healthy plants. Join other gardeners worldwide to take the best care of your green friends with ease!"
            />
            <Button
                className={style.makeEasy__button}
                onClick={() => goToPage(PAGES.REGISTRATION)}
            >
                Continue
            </Button>
            <div className={style.makeEasy__illustr} />
        </div>
    )
}

export default MakeEasy;
