import styled, { css } from 'styled-components';

interface ButtonProps {
  active: boolean;
}

export const Nav = styled.nav`
  border-radius: 4px;
  display: flex;
  justify-content: center;
  margin: 0 20px;
`;

export const Button = styled.button<ButtonProps>`
  align-items: center;
  background-color: #f9f9f9;
  color: #696969;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  height: 88px;
  justify-content: center;
  transition: 0.15s ease-in-out;
  width: 124px;

  &:first-of-type {
    border-radius: 4px 0 0 4px;
  }

  &:last-of-type {
    border-radius: 0 4px 4px 0;
  }

  svg {
    color: #696969;
    font-size: 24px;
    margin-bottom: 16px;
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #f26f14;
      border-radius: 4px;
      box-shadow: 0 0 5px rgba(168, 162, 154, 0.69);
      color: #fff;

      svg {
        color: #fff;
      }
    `}

  & + button {
    border-left: 1px solid #eaeaea;
  }
`;
