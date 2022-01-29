import React, { FC } from "react";
import { PageInfo } from "../../components/PageInfo/PageInfo.components";
import { Button } from "../../components/Button/Button.component";
import style from './style.module.scss';

const MakeEasy: FC = () => {
    return (
        <div className={style.makeEasy}>
            <PageInfo
                className={style.makeEasy__info}
                title="We make plant growing look easy"
                subTitle="Let’s grow a beautiful garden full of happy and healthy plants. Join other gardeners worldwide to take the best care of your green friends with ease!"
            />
            <Button className={style.makeEasy__button}>Continue</Button>
            <div className={style.makeEasy__illustr} />
        </div>
    )
}

export default MakeEasy;
