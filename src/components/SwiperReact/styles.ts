import styled from 'styled-components';
import { Swiper as SwiperReact } from 'swiper/react';

import right from '../../assets/right.png';
import left from '../../assets/left.png';

export const Swiper = styled(SwiperReact)`
  height: 46vh;
  padding-left: 10%;

  .swiper-button-next {
    background-image: url(${right});
    background-repeat: no-repeat;
    right: 60px;
    width: 30px;

    &::after {
      content: '';
      font-family: none;
    }
  }
  .swiper-button-prev {
    background-image: url(${left});
    background-repeat: no-repeat;
    left: 50px;

    &::after {
      content: '';
      font-family: none;
    }
  }
`;
