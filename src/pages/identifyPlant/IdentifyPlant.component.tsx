import React from 'react';
import PAGES from 'enums/pages.enum';
import { TPageComponent } from 'types/app.types';
import Button from 'components/Button/Button.component';
import PageInfo from 'components/PageInfo/PageInfo.components';
import style from './style.module.scss';

const IdentifyPlant: TPageComponent = ({ goToPage }) => (
  <div className={style.identifyPlant}>
    <PageInfo
      className={style.identifyPlant__info}
      title="Instantly identify any plant with high accuracy"
      subTitle="Easily scan any plants and get immediate information about them"
    />
    <Button
      className={style.identifyPlant__button}
      onClick={() => goToPage(PAGES.RECOGNIZE)}
    >
      Get Started
    </Button>
    <div className={style.identifyPlant__illustr} />
  </div>
);

export default IdentifyPlant;
