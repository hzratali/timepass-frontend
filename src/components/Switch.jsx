import styled from "styled-components";

const SwitchContainer = styled.div`
  width: 48px;
  height: 24px;
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: 999px;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: var(--primary-marine-blue);
`;

const SwitchCircle = styled.div`
  width: 18px;
  height: 18px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transform: ${(props) => (props.isOn ? "translateX(24px)" : "translateX(0)")};
  transition: transform 0.3s;
`;

const Switch = ({ isOn, onClick }) => {
  return (
    <SwitchContainer isOn={isOn} onClick={onClick}>
      <SwitchCircle isOn={isOn} />
    </SwitchContainer>
  );
};

export default Switch;
