import React, { FC, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import 'styles/global.module.scss';
import { TPageComponent } from 'types/app.types';
import IdentifyPlant from 'pages/identifyPlant/IdentifyPlant.component';
import Header from 'components/Header/Header.component';
import Footer from 'components/Footer/Footer.component';
import Recognize from 'pages/recognize/Recognize.component';
import LearnToxic from 'pages/learnToxic/LearnToxic.component';
import DiagnosePlant from 'pages/diagnosePlant/DiagnosePlant.component';
import PlantCare from 'pages/plantCare/PlantCare.component';
import MakeEasy from 'pages/makeEasy/MakeEasy.component';
import Registration from 'pages/registration/Registration.component';
import PAGES from 'enums/pages.enum';
import style from './app.module.scss';

const PAGES_MAP: Record<PAGES, TPageComponent> = {
  [PAGES.IDENTIFY_PLANT]: IdentifyPlant,
  [PAGES.RECOGNIZE]: Recognize,
  [PAGES.LEARN_TOXIC]: LearnToxic,
  [PAGES.DIAGNOSE_PLANT]: DiagnosePlant,
  [PAGES.PLANT_CARE]: PlantCare,
  [PAGES.MAKE_EASY]: MakeEasy,
  [PAGES.REGISTRATION]: Registration,
};

const App: FC = () => {
  const [currentPage, setCurrentPage] = useState(PAGES.IDENTIFY_PLANT);
  const pages = Object.keys(PAGES_MAP) as PAGES[];

  return (
    <>
      <Header />
      <main>
        {
            pages.map((page) => {
              const Component = PAGES_MAP[page];

              return (
                <CSSTransition
                  key={page}
                  in={currentPage === page}
                  timeout={600}
                  mountOnEnter
                  unmountOnExit
                  classNames={{
                    enter: style.page__enter,
                    enterActive: style.page__enterActive,
                    exitActive: style.page__exitActive,
                    exitDone: style.page__exit,
                  }}
                >
                  <div className={style.page}>
                    <Component goToPage={setCurrentPage} />
                  </div>

                </CSSTransition>
              );
            })
        }
      </main>
      <Footer />
    </>
  );
};

export default App;
