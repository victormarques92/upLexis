import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  align-items: center;
  background-image: linear-gradient(
    39deg,
    #ff8d49 0%,
    #ef6909 100%
  );
  border-radius: 6px;
  color: ${theme.colors.white};
  cursor: pointer;
  display: flex;
  font-weight: 700;
  justify-content: center;
  height: 39px;
  margin-left: 44px;
  text-align: center;
  width: 129px;
`;
