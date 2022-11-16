import { Header } from "../../components/Header";
import style from "./style.module.scss"
import { MainPage } from "../../components/MainPage";
import { About } from "../../components/About";
import { MainGallery } from "../../components/MainGallery";
import { FindUs } from "../../components/FindUs";

export function Home() {
  return (
    <div className={style.homeContainer}>
      <Header/>
      <MainPage/>
      <About/>
      <MainGallery/>
      <FindUs/>
    </div>
  )
}