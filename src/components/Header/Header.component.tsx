import React from 'react';
import {ReactComponent as Logo} from "../../assets/svg/plantInPot.svg";
import style from './style.module.scss';

function Header() {
    return (
            <header>
                <div className={style.appTitle}>
                    <Logo />
                    <span className={style.appTitle_bold}>PLNT:</span>
                    <span>Plant & Tree Idenifier</span>
                </div>
            </header>
    );
}

export default Header;
