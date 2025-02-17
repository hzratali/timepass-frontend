import styled from "styled-components";
import { useFormSteps } from "../../context/FormProvider";

const PlanCard = ({ details, active, onSelect }) => {
  const { title, price, year_benefit, icon } = details;
  const [{ isYearly }] = useFormSteps();

  const showPrice = () => {
    if (isYearly) {
      return `$${price.yearly}/yr`;
    }
    return `$${price.monthly}/mo`;
  };
  return (
    <CardContainer onClick={onSelect} active={active}>
      <CardIcon>
        {/* <LazyImage src="../../assets/Timepass/icon-arcade.svg" alt="" /> */}
        <img src={icon} alt="" />
      </CardIcon>
      <CardDetails>
        <PlanTitle>{title}</PlanTitle>
        <PlanSubtitle>{showPrice()}</PlanSubtitle>
        {isYearly && <PlanYearlyInfo>{year_benefit}</PlanYearlyInfo>}
      </CardDetails>
    </CardContainer>
  );
};

export default PlanCard;

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ active }) =>
    active ? `var(--neutral-alabaster)` : `transparent`};
  border: ${({ active }) =>
    active
      ? `1px solid var(--primary-purplish-blue)`
      : `1px solid var(--neutral-light-gray)`};
  padding: 16px;
  gap: 16px;

  &:hover {
    border-color: var(--primary-purplish-blue);
  }
  border-radius: 12px;
  cursor: pointer;
`;

const CardIcon = styled.div``;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const PlanTitle = styled.p`
  color: var(--primary-marine-blue);
  font-weight: bold;
`;
const PlanSubtitle = styled.p`
  color: var(--neutral-light-gray);
  font-size: 13px;
`;
const PlanYearlyInfo = styled.span`
  font-size: 11px;
  color: var(--primary-marine-blue);
`;
