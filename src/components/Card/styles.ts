import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  div:first-of-type {
    flex: 1;
  }
`;

export const Content = styled.div`
  padding: 32px 24px 40px;
  text-align: center;

  svg {
    color: #f26f14;
    font-size: 32px;
    margin-bottom: 24px;
  }

  h3 {
    color: #444;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 24px;
  }

  p {
    color: #9e9e9e;
    font-size: 13px;
    font-weight: 500;
  }
`;

export const Footer = styled.footer`
  align-items: center;
  background-image: linear-gradient(
    39deg,
    #ff8d49 0%,
    #ef6909 100%
  );
  display: flex;
  height: 52px;
  justify-content: space-between;
  padding: 16px;

  p {
    color: #fefefe;
    font-size: 22px;
  }

  a {
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
  }
`;
