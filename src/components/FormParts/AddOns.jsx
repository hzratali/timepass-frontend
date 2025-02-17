import styled from "styled-components";
import { addOns } from "../../constants";
import AddonCard from "../Cards/AddonCard";
import { ACTIONS, useFormSteps } from "../../context/FormProvider";

const AddOns = () => {
  const [state, dispatch] = useFormSteps();
  const onSelect = (idx) => {
    return function () {
      dispatch({ type: ACTIONS.TEMP_ADD_ON, payload: idx });
    };
  };

  return (
    <AddOnContainer>
      {addOns.map((addOn, idx) => (
        <AddonCard
          details={addOn}
          key={addOn.id}
          onSelect={onSelect(idx)}
          checked={state.selectedAddOns.has(idx)}
        />
      ))}
    </AddOnContainer>
  );
};

export default AddOns;

const AddOnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
