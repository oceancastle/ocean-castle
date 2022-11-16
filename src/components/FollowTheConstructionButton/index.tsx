import { CaretRight } from "phosphor-react";
import style from './style.module.scss'

export function FollowTheConstructionButton() {
  return (
    <button className={style.followTheConstructionButton}>
      ACOMPANHE A CONSTRUÇÃO
      <CaretRight size={20} weight={"bold"}/>
    </button>
  )
}