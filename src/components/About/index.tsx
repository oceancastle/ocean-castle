import style from "./style.module.scss"
import mdaAbout from '../../assets/MdaAbout.svg'
import houseIcon from '../../assets/iconecasa.svg'
import couchIcon from '../../assets/iconesofa.svg'
import lineDesign from '../../assets/Linhas.svg'
import { FollowTheConstructionButton } from "../FollowTheConstructionButton"
import { Buildings, House, HouseLine, HouseSimple } from "phosphor-react"

export function About() {
  return (
    <body className={style.aboutContainer} id="about">
      <div className={style.blurOfInfos}>
        <img src={mdaAbout} alt="Marca D'água - Sobre" height={60} className={style.mdaAbout}/>
        <div className={style.detailsContainer}>
          <div className={style.details}>
            <div className={style.textContainer}>
              <span>28</span>
              <p>APARTAMENTOS</p>
            </div>
            <House size={40}/>
          </div>
          <div className={style.details}>
            <div className={style.textContainer}>
              <span>2</span>
              <p>COBERTURAS PLANAS</p>
            </div>
            <Buildings size={40}/>
          </div>
          <div className={style.details}>
            <div className={style.textContainer}>
              <span>2</span>
              <p>APARTAMENTOS TÉRREOS</p>
            </div>
            <HouseLine size={40}/>
          </div>
          <div className={style.infoText}>
            <h2>Seu Home Club de frente para o mar em Itapoá!</h2>
            <p>Na melhor região da praia de Itapoá, o Ocean Castle Home Club se diferencia sendo o maior empreendimento frente ao mar da praia de Itapoá, com a maior área e infraestrutura completa para lazer e convivência.</p>
          </div>
        </div>
      </div>
      <div className={style.otherDetails}>
          <img src={lineDesign} height={150} className={style.lineDesign}/>
          <FollowTheConstructionButton/>
        </div>
    </body>
  )
}