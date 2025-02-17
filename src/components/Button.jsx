import styled, { css } from "styled-components";

const variantStyles = {
  primary: css`
    background-color: var(--primary-purplish-blue);
    color: var(--neutral-white);
    &:hover {
      background-color: var(--primary-pastel-blue);
    }
  `,
  secondary: css`
    background-color: #03295a;
    color: var(--neutral-white);
    &:hover {
      background-color: #174a8a;
    }
  `,
  neutral: css`
    background-color: transparent;
    color: var(--neutral-cool-gray);
    &:hover {
      color: var(--primary-marine-blue);
    }
  `,
};

const sizeStyles = {
  small: "0.5rem 1rem",
  medium: "0.75rem 1.5rem",
  large: "1rem 2rem",
};

export const Button = styled.button`
  border-radius: 0.5rem;
  font-size: 15px;
  cursor: pointer;
  ${({ variant }) => variantStyles[variant] || variantStyles.primary};
  padding: ${({ size }) => sizeStyles[size] || sizeStyles.medium};
  /* ${({ bgColor, variant }) =>
    bgColor && !variant && `background-color: ${bgColor};`}
  ${({ color, variant }) => color && !variant && `color: ${color};`} */
  border: ${({ borderColor }) =>
    borderColor ? `2px solid ${borderColor}` : "none"};
  /* &:hover {
    background-color: ${({ hoverColor }) => hoverColor || "inherit"};
  } */

  transition: background-color 0.3s ease;
`;
