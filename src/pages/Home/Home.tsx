import React, { useEffect, useState } from 'react';

import { Card, Navigation } from '../../components';
import { CardProps } from '../../components/Card/Card';
import list from '../../mocks/list';

import { Grid } from './styles';

const Home: React.FC = () => {
  const [current, setCurrent] = useState('all');
  const [showMenu, setShowMenu] = useState<CardProps[]>([]);

  useEffect(() => {
    const newList = list.filter(item =>
      item.hash.includes(current),
    );

    setShowMenu(newList);
  }, [current]);

  return (
    <>
      <Navigation current={current} onClick={setCurrent} />

      <Grid>
        {showMenu.length > 0
          ? showMenu.map((item, index) => (
              <Card
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                price={item.price}
                link={item.link}
                hash={item.hash}
              />
            ))
          : list.map((item, index) => (
              <Card
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                price={item.price}
                link={item.link}
                hash={item.hash}
              />
            ))}
      </Grid>
    </>
  );
};

export default Home;
