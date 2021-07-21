import React from 'react';
import { Container, Txt } from './styles';

interface TextProps {
  Text: string;
}
const Box: React.FC<TextProps> = ({ children, Text }) => {
  return (
    <Container>
      {children}

      <Txt>{Text}</Txt>
    </Container>
  );
};

export default Box;
