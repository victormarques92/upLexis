import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import { SwiperSlide } from 'swiper/react';

import {
  Banner,
  Box,
  Button,
  SwiperReact,
} from '../../components';
import Img from '../../assets/image.png';

import { Container, Footer, Row, Text } from './styles';
import bannerABout from '../../mocks/bannerABout';

const About: React.FC = () => {
  return (
    <Container>
      <Banner data={bannerABout} />
      <Row>
        <Link to={'/'}>
          <FaChevronLeft /> <span>Histórico Empresarial</span>
        </Link>
      </Row>

      <SwiperReact>
        <SwiperSlide>
          <Box
            Text={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu smod tempor incididunt ut labore et dolore magna aliqua.'
            }
          >
            <img src={Img} alt="image" />
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            Text={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu smod tempor incididunt ut labore et dolore magna aliqua.'
            }
          >
            <img src={Img} alt="image" />
          </Box>
        </SwiperSlide>
      </SwiperReact>
      <Row>
        <Text>
          <p>
            O aplicativo Histórico Empresarial permite ao usuário
            ter acesso a todos os fatos e acontecimentos
            relevantes de uma empresa desde o seu ano de
            fundação. Tenha acesso aos principais eventos
            corporativos de uma empresa, como: marcos jurídicos,
            mudança no quadro societário, aumento de
            capital,reportagens e muito mais.
          </p>

          <p>
            Após realizar a consulta, o histórico é salvo
            automaticamente, tornando as informações acessíveis
            ao usuário. A linha do tempo pode também ser
            exportada no formato PDF.
          </p>
        </Text>

        <Footer>
          <h1>
            <small>R$</small>40,00
          </h1>

          <Button>Habitlitar</Button>
        </Footer>
      </Row>
    </Container>
  );
};

export default About;
