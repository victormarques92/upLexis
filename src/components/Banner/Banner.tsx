import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import * as assets from '../../assets';
import { Button } from '../../components';

import { Image, Layer } from './styles';

interface DataBannerProps {
  id: number;
  highlighted?: boolean;
  image: string;
  title: string;
  description: string;
  value: string;
  link: string;
}

interface BannerProps {
  data: DataBannerProps[];
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  return (
    <Swiper>
      {data.map(slide => (
        <SwiperSlide key={slide.id}>
          <Image src={slide.image} alt={slide.title} />

          <Layer highlighted={slide.highlighted}>
            <div>
              <img src={assets.Brand} alt="UpLexis" />
              <h1>{slide.title}</h1>
            </div>

            <p>{slide.description}</p>

            <footer>
              <h1>
                <small>R$</small>
                {slide.value}
              </h1>

              <Button>
                <Link to={slide.link}>Saiba mais</Link>
              </Button>
            </footer>
          </Layer>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
