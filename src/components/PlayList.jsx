import { useAppContext } from '../context/AppContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import RatingStart from './RatingStart';
import 'swiper/css';
import 'swiper/css/free-mode';

export default function PlayList() {
  const { playList } = useAppContext();

  return <div className="play-list">
    <Swiper
      spaceBetween={ 20 }
      slidesPerView={ 3 }
      freeMode={ true }
      modules={ [FreeMode] }
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        playList.map((item, __index) => {
          const { thumbnail, name, avatar, rating } = item;
          return <SwiperSlide key={ __index }>
            <div className="play-list__cart"> 
              <img className="__card-thumb" src={ thumbnail } alt={ name } />
              <div className="__card-entry">
                
                <img className="__card-ava" src={ avatar } alt="#avatar" />
                <RatingStart number={ parseInt(rating) } />
                <h4 className="__card-title">{ name }</h4>
              </div>
            </div>
          </SwiperSlide>
        })
      }
    </Swiper>
  </div>
}