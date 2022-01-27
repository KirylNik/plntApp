import React from 'react';
import './color.config.scss';
import './fonts.config.scss';
import style from './app.module.scss';
import { IdentifyPlant } from "./pages/identifyPlant/IdentifyPlant.component";
import {ReactComponent as Logo} from "./assets/svg/plantInPot.svg";

function App() {
  return (
      <>
        <header>
          <div className={style.appTitle}>
            <Logo />
            <span className={style.appTitle_bold}>PLNT:</span>
            <span>Plant & Tree Idenifier</span>
          </div>
        </header>
        <IdentifyPlant />
      </>
  );
}

export default App;
