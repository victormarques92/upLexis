import styled from 'styled-components';
import theme from '../../styles/theme';

interface PropsColor {
  highlighted?: boolean;
}

export const Image = styled.img`
  height: 296px;
  object-fit: cover;
  width: 100%;
`;

export const Layer = styled.div<PropsColor>`
  left: 30px;
  position: absolute;
  top: 30px;

  div {
    display: flex;
    align-items: center;

    h1 {
      border-left: 1px solid
        ${({ highlighted }) =>
          highlighted ? theme.colors.white : theme.colors.dark};
      color: ${({ highlighted }) =>
        highlighted ? theme.colors.white : theme.colors.dark};
      font-weight: 400;
      margin-left: 20px;
      padding-left: 20px;
    }
  }

  p {
    background-color: transparent;
    color: ${({ highlighted }) =>
      highlighted ? theme.colors.white : theme.colors.dark};
    font-size: 19px;
    font-weight: 300;
    line-height: 24px;
    margin-top: 20px;
    width: 500px;
  }

  footer {
    align-items: center;
    display: flex;
    margin-top: 20px;

    h1 {
      color: ${({ highlighted }) =>
        highlighted ? theme.colors.white : theme.colors.dark};
      font-weight: 400;

      small {
        font-size: 10px;
        margin-right: 4px;
      }
    }

    a {
      color: ${theme.colors.white};
      font-size: 18px;
    }
  }
`;
