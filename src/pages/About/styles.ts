import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  a {
    align-items: center;
    color: ${theme.colors.secondary};
    display: flex;

    span {
      padding-left: 8px;
    }
  }
`;

export const Row = styled.div`
  padding: 34px 168px;
`;

export const Text = styled.div`
  margin-top: 44px;
  p {
    color: ${theme.colors.greyMedium};
    font-size: 16px;
    font-weight: 300;

    & + p {
      margin-top: 16px;
    }
  }
`;

export const Footer = styled.footer`
  align-items: center;
  display: flex;
  margin-top: 50px;

  h1 {
    color: ${theme.colors.dark};
    font-weight: 400;
  }

  small {
    font-size: 10px;
  }
`;
