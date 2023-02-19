import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 24px;
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: 16px;
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => theme.colors.neutral.darkGrayBlue};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gradients.lightRoyalBlue};
  }
`;

export default Button;
