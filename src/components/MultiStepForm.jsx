import FormProvider from "../context/FormProvider";
import useMediaQuery from "../hooks/useMediaQuery";
import DesktopForm from "./DesktopForm";
import MobileForm from "./MobileForm";

const MultiStepForm = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <FormProvider>{isMobile ? <MobileForm /> : <DesktopForm />}</FormProvider>
    </div>
  );
};
export default MultiStepForm;
