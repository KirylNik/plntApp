import { FC } from 'react';
import PAGES from '../enums/pages.enum';

type TBasePageProps = {
    goToPage: (page: PAGES) => void
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type TPageComponent<T = {}> = FC<TBasePageProps & T>
