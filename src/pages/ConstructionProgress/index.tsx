import { Buildings, Lightning, Toilet, Wall, Wrench } from "phosphor-react";
import mdaProgressPage from "../../assets/mdaconstructionprogress.svg"
import buildingPicture from "../../assets/predioparaprogressao.svg"
import logo from "../../assets/logo2.svg"
import style from "./style.module.scss"
import { Header } from "../../components/Header";


export function ConstructionProgress() {
  return (
    <>
      <Header />
      <main className={style.container}>
        <img src={mdaProgressPage} alt="Marca D'Água" height={60} className={style.mdaProgressPage} />
        <div className={style.displayFlex}>
          <div className={style.progressBarsContainer}>
            <div className={style.progressionBarContainer}>
              <div className={style.iconAndTitle}>
                <Wrench size={20}/>
                <span>Serviços Preliminares</span>
              </div>
              <div className={style.barContainer}>
                <div className={style.progressBar}>
                  <div className={style.progression} style={{width:"100%"}}></div>
                </div>
                <span>100%</span>
              </div>
            </div>

            <div className={style.progressionBarContainer}>
              <div className={style.iconAndTitle}>
                <Wrench size={20}/>
                <span>Fundação</span>
              </div>
              <div className={style.barContainer}>
                <div className={style.progressBar}>
                  <div className={style.progression} style={{width:"100%"}}></div>
                </div>
                <span>100%</span>
              </div>
            </div>

            <div className={style.progressionBarContainer}>
              <div className={style.iconAndTitle}>
                <Buildings size={20}/>
                <span>Estrutura</span>
              </div>
              <div className={style.barContainer}>
                <div className={style.progressBar}>
                  <div className={style.progression} style={{width:"100%"}}></div>
                </div>
                <span>100%</span>
              </div>
            </div>

            <div className={style.progressionBarContainer}>
              <div className={style.iconAndTitle}>
                <Lightning size={20}/>
                <span>Elétrica</span>
              </div>
              <div className={style.barContainer}>
                <div className={style.progressBar}>
                  <div className={style.progression} style={{width:"42%"}}></div>
                </div>
                <span>42%</span>
              </div>
            </div>

            <div className={style.progressionBarContainer}>
              <div className={style.iconAndTitle}>
                <Toilet size={20}/>
                <span>Hidrosanitaria</span>
              </div>
              <div className={style.barContainer}>
                <div className={style.progressBar}>
                  <div className={style.progression} style={{width:"55%"}}></div>
                </div>
                <span>55%</span>
              </div>
            </div>

            <div className={style.progressionBarContainer}>
              <div className={style.iconAndTitle}>
                <Wall size={20}/>
                <span>Alvenaria</span>
              </div>
              <div className={style.barContainer}>
                <div className={style.progressBar}>
                  <div className={style.progression} style={{width:"93%"}}></div>
                </div>
                <span>93%</span>
              </div>
            </div>

            <div className={style.progressionBarContainer}>
              <div className={style.iconAndTitle}>
                <Wall size={20}/>
                <span>Reboco</span>
              </div>
              <div className={style.barContainer}>
                <div className={style.progressBar}>
                  <div className={style.progression} style={{width:"60%"}}></div>
                </div>
                <span>60%</span>
              </div>
            </div>
          </div>

          <div className={style.infoToBuilding}>
            <div className={style.pictureFrame}>
              <img src={buildingPicture} alt="" />
              <span>Ocean Castle - Itapoá/SC</span>
            </div>
            <img src={logo} alt="Logo" />
          </div>
        </div>
      </main>
    </>

  )
}
