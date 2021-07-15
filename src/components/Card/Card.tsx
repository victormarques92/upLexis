import React from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { Link } from 'react-router-dom';

import { Container, Content, Footer } from './styles';

export interface CardProps {
  icon: React.ComponentType<IconBaseProps>;
  title: string;
  description: string;
  price: number;
  link: string;
  hash: string;
}

const Card: React.FC<CardProps> = ({
  icon: Icon,
  title,
  description,
  price,
  link,
}) => {
  return (
    <Container>
      <Content>
        <Icon />

        <h3>{title}</h3>
        <p>{description}</p>
      </Content>

      <Footer>
        <p>
          {new Intl.NumberFormat('pr-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(price)}
        </p>

        <Link to={link}>Saiba mais</Link>
      </Footer>
    </Container>
  );
};

export default Card;
