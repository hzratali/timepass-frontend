import styled from "styled-components";
import { useFormSteps } from "../../context/FormProvider";
import AddOns from "./AddOns";
import Summary from "./Summary";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import ThankYou from "./ThankYou";
import { stepData } from "../../constants";

export default function MainForm() {
  const [{ currentStep }] = useFormSteps();
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <SelectPlan />;
      case 3:
        return <AddOns />;
      case 4:
        return <Summary />;
      case 5:
        return <ThankYou />;
      default:
        return <PersonalInfo />;
    }
  };
  return (
    <>
      {currentStep < 5 && (
        <FormInfo>
          <h4>{stepData[currentStep - 1].title}</h4>
          <p>{stepData[currentStep - 1].subtitle}</p>
        </FormInfo>
      )}
      {renderCurrentStep()}
    </>
  );
}

const FormInfo = styled.div`
  h4 {
    font-size: 22px;
    margin-bottom: 10px;
    color: var(--primary-marine-blue);
  }
  p {
    font-size: 18px;
    color: var(--neutral-cool-gray);
    line-height: 26px;
  }
  margin-bottom: 20px;
`;
