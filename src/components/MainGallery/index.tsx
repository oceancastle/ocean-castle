import { SwiperProps, SwiperSlide } from "swiper/react"
import Slider from "../Slider"
import Galeria1 from "../../assets/ocean3.jpg"
import Galeria2 from "../../assets/ocean4.jpg"
import Galeria3 from "../../assets/ocean5.jpg"
import Galeria4 from "../../assets/ocean6.jpg"
import Galeria5 from "../../assets/ocean7.jpg"
import Galeria6 from "../../assets/ocean8.jpg"
import Galeria7 from "../../assets/ocean12.jpg"
import Galeria8 from "../../assets/ocean13.jpg"
import Galeria9 from "../../assets/ocean14.jpg"
import Galeria10 from "../../assets/ocean15.jpg"
import Galeria11 from "../../assets/ocean16.jpg"
import Galeria12 from "../../assets/ocean17.jpg"
import Galeria13 from "../../assets/ocean18.jpg"
import Galeria14 from "../../assets/ocean19.jpg"
import Galeria15 from "../../assets/ocean20.jpg"
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
        <img src={mdaMainGallery} alt="" height={60}/>
        <img src={LinhasDouradas} alt="" className={style.goldenLines}/>
      </div>
      <div className={style.displaySliderAndDetails}>
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
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria6} alt="" className={style.imageOfGallery}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria7} alt="" className={style.imageOfGallery}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria8} alt="" className={style.imageOfGallery}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria9} alt="" className={style.imageOfGallery}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria10} alt="" className={style.imageOfGallery}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria11} alt="" className={style.imageOfGallery}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria12} alt="" className={style.imageOfGallery}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria13} alt="" className={style.imageOfGallery}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria14} alt="" className={style.imageOfGallery}/>
          </SwiperSlide>
          <SwiperSlide className={style.swiperSlide}>
            <img src={Galeria15} alt="" className={style.imageOfGallery}/>
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