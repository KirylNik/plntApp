import React from 'react';
import { ReactComponent as Logo } from 'assets/svg/plantInPot.svg';
import style from './style.module.scss';

function Header() {
  return (
    <header>
      <div className={style.title}>
        <Logo />
        <span className={style.title_bold}>PLNT:</span>
        <span>Plant & Tree Identifier</span>
      </div>
    </header>
  );
}

export default Header;
