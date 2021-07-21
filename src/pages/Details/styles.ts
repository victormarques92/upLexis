import styled from 'styled-components';

export const Section = styled.div`
  padding-top: 4px;
  position: relative;

  &::before {
    background-image: linear-gradient(
      39deg,
      #ff8d49 0%,
      #ef6909 100%
    );
    content: '';
    height: 4px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  button {
    align-items: center;
    background-color: transparent;
    color: #f0690a;
    display: inline-flex;
    font-size: 24px;
    margin: 40px 0;

    svg {
      margin-right: 16px;
    }
  }
`;
