import React from 'react';
import PageInfo from 'components/PageInfo/PageInfo.components';
import Button from 'components/Button/Button.component';
import { TPageComponent } from 'types/app.types';
import PAGES from 'enums/pages.enum';
import style from './style.module.scss';

const LearnToxic: TPageComponent = ({ goToPage }) => (
  <div className={style.learnToxic}>
    <PageInfo
      className={style.learnToxic__info}
      title="Learn whether your plant is toxic to pets or causes allergy"
      subTitle="Grow your garden wisely and stay away from plants that are harmful to health"
    />
    <Button
      className={style.learnToxic__button}
      onClick={() => goToPage(PAGES.DIAGNOSE_PLANT)}
    >
      Continue
    </Button>
    <div className={style.learnToxic__illustr} />
  </div>
);

export default LearnToxic;
