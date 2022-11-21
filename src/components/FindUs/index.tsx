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
        <img src={map} alt="" className={style.map}/>
        <div className={style.line}></div>
        <img src={logo} alt="" className={style.logo}/>
        <div className={style.textLocation}>
          <MapPin size={30}/>
          <span>Av. Brasil, 3414 - Itapoá/SC</span>
        </div>  
      </div>
      
    </div>
  )
}