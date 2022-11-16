import style from "./style.module.scss"
import TitleHome from "../../assets/titlehome.svg"
import { FollowTheConstructionButton } from "../FollowTheConstructionButton"
import qrCode from "../../assets/qrcode.jpeg"

export function MainPage() {
  return (
    <body>
        
        <div className={style.infoContainer}>
          <img src={TitleHome} alt="" width={250}/>  
          <FollowTheConstructionButton />
        </div>
       
      </body>
  )
}