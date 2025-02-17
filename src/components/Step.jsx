import styled, { css } from "styled-components";

const sizeStyles = {
  normal: css`
    height: 50px;
    width: 50px;
    font-size: 1rem;
  `,
  small: css`
    height: 30px;
    width: 30px;
    font-size: 0.875rem;
  `,
};

const Step = ({ step, active, size = "normal" }) => {
  return (
    <StepButton active={active} size={size}>
      {step}
    </StepButton>
  );
};

export default Step;

const StepButton = styled.button`
  /* width: 50px;
  height: 50px; */

  ${(props) => sizeStyles[props.size]}
  border: 1px solid white;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? "var(--primary-light-blue)" : "transparent"};
  color: ${(props) => (props.active ? "var(--primary-marine-blue)" : "#fff")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #99ccff;
  }
`;
