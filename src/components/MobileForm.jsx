import styled from "styled-components";
import Step from "./Step";
import { ACTIONS, useFormSteps } from "../context/FormProvider";
import MainForm from "./FormParts/MainForm";
import MobileFooter from "./MobileFooter";
import { addOns } from "../constants";

const MobileForm = () => {
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
    <Container>
      <Header>
        <StepsContainer>
          {[1, 2, 3, 4].map((step) => (
            <Step
              key={step}
              step={step}
              active={step === currentStep || (currentStep > 4 && step === 4)}
            />
          ))}
        </StepsContainer>
      </Header>
      {/* <MainForm /> */}
      <FormWrapper>
        <MainForm />
      </FormWrapper>
      <MobileFooter nextStep={nextStep} prevStep={prevStep} />
    </Container>
  );
};

export default MobileForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100vh);
  position: relative;
`;
const FormWrapper = styled.div`
  /* position: absolute; */
  background-color: white;
  width: 90%;
  /* margin: 0 auto;
  margin-top: -90px;
  margin-bottom: 20px; */
  margin: auto;
  min-height: 300px;
  max-height: calc(100vh - 80px);
  border-radius: 8px;
  padding: 24px 18px;
  position: absolute;
  /* left: 50%;
  top: 0;
  bottom: 0; */
  top: 16%;
  left: 50%;
  transform: translateX(-50%);
  transition: height 0.3s ease;
  overflow-y: auto;

  @media (min-width: 395px) {
    top: 18%;
  }
`;

// const AbsoluteWrapper = styled.div`
//   /* margin-top: -120px;
//   margin-bottom: 20px; */
// `;

const Header = styled.div`
  background-image: url("bg-sidebar-mobile.svg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 220px;
`;

const StepsContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 50px 0 0px 0;
`;
