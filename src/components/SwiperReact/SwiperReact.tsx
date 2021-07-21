import React from 'react';
import SwiperCore, {
  Controller,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper';

import { Swiper } from './styles';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([
  Controller,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
]);

const SwiperReact: React.FC = ({ children }) => {
  return (
    <Swiper
      navigation={true}
      cssMode={false}
      slidesPerView={2}
      spaceBetween={10}
      loop
    >
      {children}
    </Swiper>
  );
};

export default SwiperReact;
