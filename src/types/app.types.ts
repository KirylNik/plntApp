import {FC} from "react";
import {PAGES} from "../enums/pages.enum";

type TBasePageProps = {
    goToPage: (page: PAGES) => void
}

export type TPageComponent<T = {}> = FC<TBasePageProps & T>
