import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

const __MESSAGES = [
  {
    uid: 'f298a099-e0ff-4259-94bd-51f24b317085',
    email: 'mike.beplus@gmail.com',
    avatar: '#',
    name: 'Mike',
    datetime: '15/08/2024 20:07',
    message: 'Hey there! Just wanted to remind you that you\'re amazing and deserving of all the warmth and comfort this world has to offer. Take a deep breath, wrap yourself in a cozy blanket, and know that everything will be okay. Sometimes, the best moments come from simply enjoying the present and taking care of yourself. You\'ve got this!',
    socials: {
      facebook: '',
      x: '',
      instagram: '',
      tiktok: '',
    },
  },
  {
    uid: '3e450ab1-a82e-4c6e-aaa5-22f9cd1ed0f8',
    email: 'mike.beplus@gmail.com',
    avatar: '#',
    name: 'John',
    datetime: '15/08/2024 20:07',
    message: 'Hey! I hope you\'re wrapped up in your favorite spot, maybe with a cup of something warm. Remember, it’s perfectly okay to take a break and let yourself unwind. You’re doing great, and even on the busiest days, it’s important to find those little moments of calm. Sending you all the cozy vibes and a gentle reminder that you’re appreciated.',
    socials: {
      facebook: '',
      x: '',
      instagram: '',
      tiktok: '',
    },
  }
]

const MessageItem = (props) => {
  const { uid, name, message, datetime } = props;

  return <div className="message-item">
    <strong>{ name }</strong>
    <div dangerouslySetInnerHTML={{__html: message}}></div>
  </div>
}

export default function ViewerMessage({ message }) {
  return <div className="viewer-message" style={{height: `130px`}}>
    <Swiper
      slidesPerView={ 1 }
      direction={ 'vertical' }
      pagination={{
        type: 'fraction',
      }} 
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        __MESSAGES.map((item, __index) => {
          const { uid } = item;
          return <SwiperSlide key={ uid }>
            <MessageItem { ...item } />
          </SwiperSlide>
        })
      }
    </Swiper>
  </div>
}