import React, { useEffect, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useHistory, useParams } from 'react-router-dom';
import { CardProps } from '../../components/Card/Card';

import list from '../../mocks/list';
import { Container } from '../../styles';
import { Section } from './styles';

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { goBack } = useHistory();
  const [data, setData] = useState<CardProps>();

  useEffect(() => {
    setData(list.filter(item => item.hash === id)[0]);
  }, []);

  if (data === undefined) {
    return <h1>Carregando...</h1>;
  }

  return (
    <Section>
      <Container>
        <button onClick={goBack}>
          <FaChevronLeft />
          Voltar
        </button>

        <h1>{data.title}</h1>

        <p>{data.description}</p>

        <p>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(data.price)}
        </p>
      </Container>
    </Section>
  );
};

export default Details;
