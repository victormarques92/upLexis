import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 5px;
  filter: drop-shadow(0px 3px 9px rgba(0, 0, 0, 0.06));
  height: 320px;
  margin-top: 50px;
  padding: 14px 12px;
  width: 486px;
`;

export const Txt = styled.p`
  color: ${theme.colors.orange};
  font-size: 14px;
  font-weight: 400;
  padding: 10px 16px;
`;
