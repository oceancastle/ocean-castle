import { Header } from '../../components/Header';
import { MonthlGallery } from '../../components/MonthlyGallery';

import style from "./style.module.scss"

export function Gallerys() {
    return (
        <body className={style.container}>
            <Header/>
            <MonthlGallery/>
        </body>
    )
}
