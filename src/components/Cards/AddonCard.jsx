import styled from "styled-components";
import { useFormSteps } from "../../context/FormProvider";

export default function AddonCard({ checked, details, onSelect }) {
  const { type, subtitle, price } = details;
  const [state] = useFormSteps();

  const showPrice = () => {
    if (state.isYearly) {
      return `+$${price.yearly}/yr`;
    }
    return `+$${price.monthly}/mo`;
  };
  return (
    <Card active={checked} onClick={onSelect}>
      <Checkbox type="checkbox" checked={checked} readOnly />
      <TextContainer>
        <Title>{type}</Title>
        <Description>{subtitle}</Description>
      </TextContainer>
      <Price>{showPrice()}</Price>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--neutral-light-gray);
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: ${({ active }) =>
    active ? `var(--neutral-alabaster)` : `var(--neutral-white)`};
  ${({ active }) => active && `border-color : var(--primary-purplish-blue)`};

  &:hover {
    border-color: var(--primary-purplish-blue);
  }
`;

const Checkbox = styled.input`
  accent-color: #6366f1;
  width: 20px;
  height: 20px;
  margin-right: 15px;
  outline: 1px solid var(--neutral-magnolia);
`;

const TextContainer = styled.div`
  flex: 1;
`;

const Title = styled.div`
  font-weight: 600;
  color: var(--primary-marine-blue);
  margin-bottom: 5px;
  font-size: 14px;
`;

const Description = styled.div`
  color: var(--neutral-cool-gray);
  font-size: 12px;
`;

const Price = styled.div`
  color: var(--primary-purplish-blue);
  font-weight: 500;
  font-size: 13px;
`;
