import styled from "styled-components";
import { addOns, steps } from "../constants";
import Step from "./Step";
import MainForm from "./FormParts/MainForm";
import { Button } from "./Button";
import { ACTIONS, useFormSteps } from "../context/FormProvider";

const DesktopForm = () => {
  const [state, dispatch] = useFormSteps();

  const { currentStep, selectedAddOns } = state;

  const nextStep = () => {
    if (currentStep === 1) {
      const errorKeys = Object.keys(state.profile).filter(
        (key) => state.profile[key] === "" || !state.profile[key]
      );

      if (errorKeys.length > 0) {
        errorKeys.forEach((key) => {
          dispatch({
            type: ACTIONS.PROFILE_ERROR,
            payload: {
              key,
              value: "This field is required",
            },
          });
        });

        return;
      }
    } else if (currentStep === 3) {
      dispatch({
        type: ACTIONS.ADD_ON,
        payload: Array.from(selectedAddOns).map((addOn) => addOns[addOn]),
      });
    }

    dispatch({ type: ACTIONS.NEXT_STEP });
  };
  const prevStep = () => {
    dispatch({ type: ACTIONS.PREV_STEP });
  };
  return (
    <MainContainer>
      <MainCard>
        <Sidebar>
          {steps.map((step) => (
            <StepWrapper key={step.id}>
              <Step
                step={step.step}
                size="small"
                active={
                  step.step === currentStep ||
                  (currentStep > 4 && step.step === 4)
                }
              />
              <StepTitleWrapper>
                <StepCount>STEP {step.step}</StepCount>
                <StepTitle>{step.title}</StepTitle>
              </StepTitleWrapper>
            </StepWrapper>
          ))}
        </Sidebar>
        <FormWrapper>
          <MainForm />
          <Footer>
            {currentStep <= 4 && (
              <>
                <Button
                  type="button"
                  variant={currentStep === 4 ? "primary" : "secondary"}
                  onClick={nextStep}
                >
                  {currentStep === 4 ? "Confirm" : "Next Step"}
                </Button>
                {currentStep > 1 && (
                  <Button type="button" variant="neutral" onClick={prevStep}>
                    Go Back
                  </Button>
                )}
              </>
            )}
          </Footer>
        </FormWrapper>
      </MainCard>
    </MainContainer>
  );
};

export default DesktopForm;

const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--neutral-magnolia);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainCard = styled.div`
  display: flex;
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background-color: white;
  padding: 16px;
  border-radius: 10px;
`;

const Sidebar = styled.div`
  background-image: url("bg-sidebar-desktop.svg");
  height: 100%;
  flex: 0.4;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px 20px;
`;

const FormWrapper = styled.div`
  flex: 1;
  padding: 28px 40px 0px 40px;
  position: relative;
`;

const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const StepTitleWrapper = styled.div``;
const StepTitle = styled.p`
  color: var(--neutral-white);
  font-size: 14px;
`;

const StepCount = styled.p`
  color: var(--neutral-light-gray);
  font-size: 11px;
  margin-bottom: 5px;
`;

const Footer = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  left: 0;
  flex-direction: row-reverse;
  display: flex;
  /* margin-top: 32px; */
  justify-content: space-between;
  padding: 0 40px;
`;
