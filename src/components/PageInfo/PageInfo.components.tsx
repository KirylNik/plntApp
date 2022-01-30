import React, { FC } from 'react';
import cn from 'classnames';
import style from './style.module.scss';

type TMainLayoutProps = {
    title: string,
    subTitle: string,
    className?: string
}

const PageInfo: FC<TMainLayoutProps> = ({ title, subTitle, className }) => (
  <div className={cn(style.pageInfo, className)}>
    <h1>{title}</h1>
    <h2>{subTitle}</h2>
  </div>
);

export default PageInfo;
