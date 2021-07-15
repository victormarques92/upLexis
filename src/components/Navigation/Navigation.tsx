import React from 'react';
import icons from '../../mocks/icons';

import { Button, Nav } from './styles';

interface NavProps {
  current: string;
  onClick: (value: string) => void;
}

const menuList = [
  {
    name: 'Todos',
    hash: 'all',
    icon: icons.all,
  },
  {
    name: 'Profissional',
    hash: 'professional',
    icon: icons.professional,
  },
  {
    name: 'Reguladores',
    hash: 'regulators',
    icon: icons.regulators,
  },
  {
    name: 'Sócio Ambiental',
    hash: 'partner',
    icon: icons.partner,
  },
  {
    name: 'Jurídico',
    hash: 'legal',
    icon: icons.legal,
  },
  {
    name: 'Listas Restritivas',
    hash: 'restricted',
    icon: icons.restricted,
  },
  {
    name: 'Mídia / Internet',
    hash: 'internet',
    icon: icons.internet,
  },
  {
    name: 'Bens e Imóveis',
    hash: 'property',
    icon: icons.property,
  },
  {
    name: 'Cadastro',
    hash: 'register',
    icon: icons.register,
  },
  {
    name: 'Financeiro',
    hash: 'finance',
    icon: icons.finance,
  },
];

const Navigation: React.FC<NavProps> = ({
  current,
  onClick,
}) => {
  return (
    <Nav>
      {menuList.map(item => {
        const Icon = item.icon;

        return (
          <Button
            key={item.hash}
            active={item.hash === current}
            onClick={() => onClick(item.hash)}
          >
            <Icon />
            {item.name}
          </Button>
        );
      })}
    </Nav>
  );
};

export default Navigation;
