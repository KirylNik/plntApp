import React, {FC} from 'react';
import './color.config.scss';
import './fonts.config.scss';
import style from './app.module.scss';
import { IdentifyPlant } from "./pages/identifyPlant/IdentifyPlant.component";
import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";
import {Recognize} from "./pages/recognize/Recognize.component";
import LearnToxic from "./pages/learnToxic/LearnToxic.component";
import DiagnosePlant from "./pages/diagnosePlant/DiagnosePlant.component";
import PlantCare from "./pages/plantCare/PlantCare.component";
import MakeEasy from "./pages/makeEasy/MakeEasy.component";
import Registration from "./pages/registration/Registration.component";

const App: FC = () => {
  return (
      <div className={style.appContainer}>
        <Header />
        <main>
            {/*<IdentifyPlant />*/}
            {/*<Recognize />*/}
            {/*<LearnToxic />*/}
            {/*<DiagnosePlant />*/}
            {/*<PlantCare />*/}
            {/*<MakeEasy />*/}
            <Registration />
        </main>
        <Footer />
      </div>
  );
}

export default App;
