import mdaFindUs from "../../assets/mdaFindUs.png"
import style from "./style.module.scss"
import goldenLines from "../../assets/linhasdouradas.svg"
import map from "../../assets/mapa.svg"
import logo from "../../assets/logo2.svg"
import { MapPin } from "phosphor-react"

export function FindUs() {
  return (
    <div className={style.findUsContainer} id="findUs">
      <div className={style.designPage}>
        <img src={mdaFindUs} className={style.mdaFindUs} alt="" height={60}/>
        <img src={goldenLines} className={style.goldenLines} alt="" />
      </div>
      <div className={style.centralize}>
        <a href="https://www.google.com/maps/place/Ocean+Castle+Home+Club+Itapo%C3%A1/@-26.1253735,-48.5993451,15z/data=!4m2!3m1!1s0x0:0x224d64dca56d3281?sa=X&ved=2ahUKEwjAnN-2hsD7AhWDqJUCHZIkAeQQ_BJ6BAhwEAg"><img src={map} alt="Mapa" className={style.map}/></a>
        <div className={style.line}></div>
        <img src={logo} alt="Logo" className={style.logo}/>
        <div className={style.textLocation}>
          <MapPin size={30}/>
          <span>Av. Brasil, 3414 - Itapoá/SC</span>
        </div>  
      </div>
      
    </div>
  )
}