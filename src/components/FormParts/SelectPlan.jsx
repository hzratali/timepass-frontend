import styled from "styled-components";
import { planDetails } from "../../constants";
import PlanCard from "../Cards/PlanCard";
import { useState } from "react";
import Switch from "../Switch";
import { ACTIONS, useFormSteps } from "../../context/FormProvider";

const SelectPlan = () => {
  const [currentPlan, setCurrentPlan] = useState(-1);
  const [state, dispatch] = useFormSteps();

  const onSwitch = () => {
    dispatch({ type: ACTIONS.YEARLY });
    dispatch({ type: ACTIONS.PLAN, payload: null });
    dispatch({ type: ACTIONS.RESET_ADD_ON });
    setCurrentPlan(-1);
  };

  const onSelect = (idx) => {
    return function () {
      setCurrentPlan(idx);
      dispatch({ type: ACTIONS.PLAN, payload: planDetails[idx] });
    };
  };

  return (
    <div>
      <PlanContainer>
        {planDetails.map((plan, idx) => (
          <PlanCard
            details={plan}
            key={plan.id}
            active={currentPlan === idx}
            onSelect={onSelect(idx)}
          />
        ))}
      </PlanContainer>
      <SwitchWrapper>
        <p>Monthly</p>
        <Switch isOn={state.isYearly} onClick={onSwitch} />
        <p>Yearly</p>
      </SwitchWrapper>
    </div>
  );
};

export default SelectPlan;

const PlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SwitchWrapper = styled.div`
  display: flex;
  margin: 20px 0 0 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 8px;
  background-color: var(--neutral-magnolia);
  border-radius: 8px;
  padding: 10px 0;
  p {
    font-size: 14px;
  }
`;
