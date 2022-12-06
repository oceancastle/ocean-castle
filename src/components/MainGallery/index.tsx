import { SwiperProps, SwiperSlide } from "swiper/react"
import Slider from "../Slider"
import Galeria1 from "../../assets/ocean1.jpg"
import Galeria2 from "../../assets/ocean2.jpg"
import Galeria3 from "../../assets/ocean3.jpg"
import Galeria4 from "../../assets/ocean4.jpg"
import Galeria5 from "../../assets/ocean5.jpg"
import Galeria6 from "../../assets/ocean6.jpg"
import Galeria7 from "../../assets/ocean7.jpg"
import Galeria8 from "../../assets/ocean8.jpg"
import Galeria9 from "../../assets/ocean9.jpg"
import Galeria10 from "../../assets/ocean10.jpg"  
import Galeria11 from "../../assets/ocean11.jpg"
import Galeria12 from "../../assets/ocean12.jpg"
import LinhasDouradas from "../../assets/linhasdouradas.svg"
import { Barbell, LockKey, MapPin, Waves } from "phosphor-react"
import style from "./style.module.scss"
import mdaMainGallery from "../../assets/mdagallery.svg"

export function MainGallery() {
  const settings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true
    }
  }
  
  return (
    
    <main className={style.mainContainer} id="gallery">
      <div className={style.designPage}>
        <img src={mdaMainGallery} alt="Marca D'Água" height={60}/>
        <img src={LinhasDouradas} alt="Detalhes da Página" className={style.goldenLines}/>
      </div>
      <div className={style.displaySliderAndDetails}>
      <div className={style.sliderContainer}>
        <Slider settings={settings}>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria1} alt="Fotos do Ocean Castle" className={style.imageOfGallery}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria2} alt="Fotos do Ocean Castle" className={style.imageOfGallery}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria3} alt="Fotos do Ocean Castle" className={style.imageOfGallery}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria4} alt="Fotos do Ocean Castle" className={style.imageOfGallery}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria5} alt="Fotos do Ocean Castle" className={style.imageOfGallery}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria6} alt="Fotos do Ocean Castle" className={style.imageOfGallery}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria7} alt="Fotos do Ocean Castle" className={style.imageOfGallery}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria8} alt="Fotos do Ocean Castle" className={style.imageOfGallery}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria9} alt="Fotos do Ocean Castle" className={style.imageOfGallery}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria10} alt="Fotos do Ocean Castle" className={style.imageOfGallery}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria11} alt="Fotos do Ocean Castle" className={style.imageOfGallery}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria12} alt="Fotos do Ocean Castle" className={style.imageOfGallery}/>
          </SwiperSlide>
        </Slider>
      </div>
      <div className={style.detailsContainer}>
        <div className={style.detailsItem}>
          <Barbell size={30}/>
          <span>ACADEMIA</span>
        </div>
        <div className={style.detailsItem}>
          <LockKey size={30}/>
          <span>SEGURANÇA</span>
        </div>
        <div className={style.detailsItem}>
          <Waves size={30}/>
          <div className={style.textSpace}>
            <p>DE FRENTE PARA O</p>
            <span>MAR</span>
          </div>
        </div>
        <div className={style.detailsItem}>
          <MapPin size={30}/>
          <div className={style.textSpace}>
            <p>EXCELENTE</p>
            <span>LOCALIZAÇÃO</span>
          </div>
        </div>
      </div>
      </div>
      
    </main>
  )
}