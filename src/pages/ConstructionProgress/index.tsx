import { Buildings, Lightning, PaintRoller, SquareHalf, Toilet, Wall, Wrench } from "phosphor-react";
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
                  <div className={style.progression} style={{width:"95%"}}></div>
                </div>
                <span>95.45%</span>
              </div>
            </div>

            <div className={style.progressionBarContainer}>
              <div className={style.iconAndTitle}>
                <Lightning size={20}/>
                <span>Elétrica</span>
              </div>
              <div className={style.barContainer}>
                <div className={style.progressBar}>
                  <div className={style.progression} style={{width:"80%"}}></div>
                </div>
                <span>80%</span>
              </div>
            </div>

            <div className={style.progressionBarContainer}>
              <div className={style.iconAndTitle}>
                <Toilet size={20}/>
                <span>Hidrosanitaria</span>
              </div>
              <div className={style.barContainer}>
                <div className={style.progressBar}>
                  <div className={style.progression} style={{width:"95%"}}></div>
                </div>
                <span>95%</span>
              </div>
            </div>

            <div className={style.progressionBarContainer}>
              <div className={style.iconAndTitle}>
                <Wall size={20}/>
                <span>Alvenaria</span>
              </div>
              <div className={style.barContainer}>
                <div className={style.progressBar}>
                  <div className={style.progression} style={{width:"99%"}}></div>
                </div>
                <span>99%</span>
              </div>
            </div>

            <div className={style.progressionBarContainer}>
              <div className={style.iconAndTitle}>
                <Wall size={20}/>
                <span>Reboco</span>
              </div>
              <div className={style.barContainer}>
                <div className={style.progressBar}>
                  <div className={style.progression} style={{width:"98%"}}></div>
                </div>
                <span>98%</span>
              </div>
            </div>

            <div className={style.progressionBarContainer}>
              <div className={style.iconAndTitle}>
                <PaintRoller size={20}/>
                <span>Pintura</span>
              </div>
              <div className={style.barContainer}>
                <div className={style.progressBar}>
                  <div className={style.progression} style={{width:"40%"}}></div>
                </div>
                <span>40%</span>
              </div>
            </div>

            <div className={style.progressionBarContainer}>
              <div className={style.iconAndTitle}>
                <SquareHalf size={20}/>
                <span>Esquadrias</span>
              </div>
              <div className={style.barContainer}>
                <div className={style.progressBar}>
                  <div className={style.progression} style={{width:"70%"}}></div>
                </div>
                <span>70%</span>
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
