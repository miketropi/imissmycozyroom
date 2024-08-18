import { useCallback } from 'react';
import { useAppContext } from '../context/AppContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Mousewheel } from 'swiper/modules';
import RatingStart from './RatingStart';
import textImage from '../images/choose-the-melody-you-like.png';
import 'swiper/css';
import 'swiper/css/free-mode';
// import 'swiper/css/pagination';

const PlayPauseButton = ({ isPlaying, onClick }) => {
  return <div className="playpause-button" onClick={ onClick }>
    {
      isPlaying 
        ? <span dangerouslySetInnerHTML={{__html: '<svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M8.5 7V18" stroke="#000000" stroke-width="3" stroke-linecap="round"/> <path d="M15.5 7V12.5V18" stroke="#000000" stroke-width="3" stroke-linecap="round"/> </svg>'}}></span>
        : <span dangerouslySetInnerHTML={{__html: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.286 3.407A1.5 1.5 0 0 0 6 4.684v14.632a1.5 1.5 0 0 0 2.286 1.277l11.888-7.316a1.5 1.5 0 0 0 0-2.555L8.286 3.407z" fill="#000000"/></svg>'}}></span>
    }
  </div>
}

export default function PlayList() {
  const { playList, setPlaying, setMuted } = useAppContext();

  const onPlaying = (data) => {
    setPlaying(data);
    setMuted(false);
  }

  return <div className="play-list"> 
    <img className="tuts-text" src={ textImage } alt="#choose the melody you like" />
    <div className="swiper-custom-pagination--container">
      <div className="swiper-custom-pagination"></div>
    </div>
    <Swiper
      spaceBetween={ 20 }
      slidesPerView={ 3 }
      freeMode={ true }
      pagination={{
        type: 'fraction',
        el: '.swiper-custom-pagination',
      }} 
      centeredSlides={ true }
      mousewheel={ true }
      modules={ [Pagination, FreeMode, Mousewheel] }
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
              <PlayPauseButton onClick={ () => { 
                onPlaying(item) 
              } } />
            </div>
          </SwiperSlide>
        })
      }
    </Swiper>
  </div>
}