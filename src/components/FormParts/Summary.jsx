import styled from "styled-components";
import { ACTIONS, useFormSteps } from "../../context/FormProvider";

const Summary = () => {
  const [state, dispatch] = useFormSteps();
  const { addOns, plan } = state;

  const showPrice = (price, add = true) => {
    if (state.isYearly) {
      return `${add ? "+" : ""}$${price.yearly}/yr`;
    }
    return `${add ? "+" : ""}$${price.monthly}/mo`;
  };

  const showTotalPrice = () => {
    let planPrice;
    let addOnPrice;
    if (state.isYearly) {
      planPrice = plan.price.yearly;
      addOnPrice = addOns.reduce((prev, curr) => prev + curr.price.yearly, 0);
      let totalPrice = planPrice + addOnPrice;
      return `$${totalPrice}/yr`;
    }
    planPrice = plan.price.monthly;
    addOnPrice = addOns.reduce((prev, curr) => prev + curr.price.monthly, 0);
    let totalPrice = planPrice + addOnPrice;
    return `$${totalPrice}/mo`;
  };

  return (
    <div>
      <SummaryCard>
        <Plan>
          <div>
            <h4>{plan.title}</h4>
            <ChangeLink
              onClick={() => dispatch({ type: ACTIONS.GOTO_STEP, payload: 2 })}
            >
              Change
            </ChangeLink>
          </div>
          <span>{showPrice(plan.price, false)}</span>
        </Plan>
        <Line />
        <AddOnsWrapper>
          {addOns.map((addOn) => (
            <AddOn key={addOn.id}>
              <span>{addOn.type}</span>
              <AddOnPrice>{showPrice(addOn.price)}</AddOnPrice>
            </AddOn>
          ))}
        </AddOnsWrapper>
      </SummaryCard>
      <Total>
        <span>Total (per month)</span>
        <span>{showTotalPrice()}</span>
      </Total>
    </div>
  );
};

export default Summary;
const SummaryCard = styled.div`
  background-color: var(--neutral-magnolia);
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  color: #1f2937;
`;

const AddOnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 14px;
`;

const Line = styled.hr`
  border: none;
  height: 1px;
  background-color: var(--neutral-light-gray);
`;

const Plan = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;

  h4 {
    color: var(--primary-marine-blue);
    font-size: 15px;
  }

  span {
    color: var(--primary-marine-blue);
    font-weight: bold;
    font-size: 15px;
  }
`;

const ChangeLink = styled.div`
  color: var(--neutral-cool-gray);
  text-decoration: underline;
  cursor: pointer;
  font-size: 12px;
`;

const AddOn = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--neutral-cool-gray);
  span {
    font-size: 14px;
  }
`;

const AddOnPrice = styled.span`
  color: var(--primary-marine-blue);
  font-weight: medium;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 20px;
  font-size: 14px;

  span {
    color: var(--neutral-cool-gray);
    &:nth-child(2) {
      color: var(--primary-purplish-blue);
      font-size: 16px;
      font-weight: bold;
    }
  }
`;
