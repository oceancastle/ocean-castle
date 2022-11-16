import { SwiperProps, SwiperSlide } from "swiper/react"
import Slider from "../Slider"
import Galeria1 from "../../assets/ocean3.jpg"
import Galeria2 from "../../assets/ocean4.jpg"
import Galeria3 from "../../assets/ocean5.jpg"
import Galeria4 from "../../assets/ocean6.jpg"
import Galeria5 from "../../assets/ocean7.jpg"
import LinhasDouradas from "../../assets/linhasdouradas.svg"
import { Barbell, Check, CurrencyCircleDollar, Image, LockKey, MapPin, Waves, WaveSawtooth } from "phosphor-react"
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
        <img src={mdaMainGallery} alt="" height={60}/>
        <img src={LinhasDouradas} alt="" className={style.goldenLines} height={150}/>
      </div>
      <div className={style.sliderContainer}>
        <Slider settings={settings}>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria1} alt="" className={style.imageOfGallery}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria2} alt="" className={style.imageOfGallery}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria3} alt="" className={style.imageOfGallery}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria4} alt="" className={style.imageOfGallery}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria5} alt="" className={style.imageOfGallery}/>
          </SwiperSlide>
        </Slider>
      </div>
      <div className={style.detailsContainer}>
        <div className={style.detailsItem}>
          <Barbell size={35}/>
          <span>ACADEMIA</span>
        </div>
        <div className={style.detailsItem}>
          <LockKey size={35}/>
          <span>SEGURANÇA</span>
        </div>
        <div className={style.detailsItem}>
          <Waves size={35}/>
          <div className={style.textSpace}>
            <p>DE FRENTE PARA O</p>
            <span>MAR</span>
          </div>
        </div>
        <div className={style.detailsItem}>
          <MapPin size={35}/>
          <div className={style.textSpace}>
            <p>EXCELENTE</p>
            <span>LOCALIZAÇÃO</span>
          </div>
        </div>
      </div>
    </main>
  )
}