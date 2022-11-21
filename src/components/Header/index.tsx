import { FacebookLogo, InstagramLogo } from "phosphor-react";
import Logo from "../../assets/logoocean.svg"
import style from "./styles.module.scss"
import { List, WhatsappLogo } from "phosphor-react";


export function Header() {
  return (
    <header className="container">
      <nav className={style.headerContainer}>
        <input type="checkbox" id="check" className={style.check} />
        <label htmlFor="check" className={style.checkbtn}>
          <List color="white" />
        </label>
        <a href="/"><img src={Logo} alt="Logo" className={style.logo}/></a>
        <ul className={style.linksContainer}>
          <li><a href="/">INÍCIO</a></li>
          <li><a href="#about">SOBRE</a></li>
          <li><a href="#gallery">GALERIA</a></li>
          <li><a href="#findUs">ENCONTRE-NOS</a></li>
          <li><a href="/progresso">PROGRESSÃO DA OBRA</a></li>
        </ul>
        <ul className={style.iconsLinks}>
           <li><a href="https://www.instagram.com/oceancastleitapoa/" target="_blank"><InstagramLogo size={24} /></a></li>
           <li><a href="https://wa.me/554734430541" target="_blank"><WhatsappLogo size={24} /></a></li>
           <li><a href="https://www.facebook.com/OceanCastle" target="_blank"><FacebookLogo size={24} /></a></li>
         </ul>
      </nav>
    </header>
  )
}
    // <header className={style.headerContainer}>
    //   <input type="checkbox" id="check" className={style.check} />
    //   <label htmlFor="check" className={style.checkbtn}>
    //     <List color="white" />
    //   </label>
    //   <nav className={style.navContainer}>
    //     <img src={Logo} alt="" className={style.logo} />
    //     <ul className={style.textLinks}>
    //       <li><a href="/">INÍCIO</a></li>
    //       <li><a href="#about">SOBRE</a></li>
    //       <li><a href="#gallery">GALERIA</a></li>
    //       <li><a href="#findUs">ENCONTRE-NOS</a></li>
    //       <li><a href="/progresso">PROGRESSÃO DA OBRA</a></li>
    //     </ul>
    //     
    //   </nav>
    // </header>
