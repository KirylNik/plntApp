import React from 'react';
import PAGES from 'enums/pages.enum';
import { TPageComponent } from 'types/app.types';
import Button from 'components/Button/Button.component';
import PageInfo from 'components/PageInfo/PageInfo.components';
import style from './style.module.scss';

const DiagnosePlant: TPageComponent = ({ goToPage }) => (
  <div className={style.diagnosePlant}>
    <PageInfo
      className={style.diagnosePlant__info}
      title="Diagnose your plant with Health Check"
      subTitle="Diagnose plant problems before it's too late and provide them with special treatment"
    />
    <Button
      className={style.diagnosePlant__button}
      onClick={() => goToPage(PAGES.PLANT_CARE)}
    >
      Continue
    </Button>
    <div className={style.diagnosePlant__illustr} />
  </div>
);

export default DiagnosePlant;
