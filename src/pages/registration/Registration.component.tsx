import React, {FC, useState} from "react";
import { PageInfo } from "../../components/PageInfo/PageInfo.components";
import { Button } from "../../components/Button/Button.component";
import style from './style.module.scss';
import EmailInput from "../../components/EmailInput/EmailInput.component";
import {TPageComponent} from "../../types/app.types";

const Registration: TPageComponent = () => {
    const [isEmailValid, setIsEmailValid] = useState(false);
    debugger
    return (
        <div className={style.registration}>
            <PageInfo
                className={style.registration__info}
                title="Just one more step"
                subTitle="to nature exploration, gardening, and more!"
            />

            <div className={style.registration__messageBlock}>
                See the quiz results and get access to your personal plan
            </div>

            <div className={style.registration__createAccount}>
                Let's create PLNT account
            </div>

            <form className={style.registration__emailForm}>
                <EmailInput
                    className={style.registration__emailInput}
                    name="email"
                    onStatusChange={setIsEmailValid}
                    isValid={isEmailValid}
                />
                <Button
                    className={style.registration__button}
                    disabled={!isEmailValid}
                >
                    Create
                </Button>
            </form>

            <div className={style.registration__illustr} />
        </div>
    )
}

export default Registration;
