import { createContext, useContext, useReducer } from "react";

const FormContext = createContext();

export const useFormSteps = () => useContext(FormContext);

const initialState = {
  currentStep: 1,
  totalStep: 5,
  profile: {
    name: "",
    email: "",
    phone: "",
  },
  plan: null,
  addOns: [],
  selectedAddOns: new Set(),
  isYearly: false,
  errors: {
    name: null,
    email: null,
    phone: null,
  },
};

export const ACTIONS = {
  PROFILE: "PROFILE",
  PLAN: "PLAN",
  ADD_ON: "ADD_ON",
  TEMP_ADD_ON: "TEMP_ADD_ON",
  RESET_ADD_ON: "RESET_ADD_ON",
  NEXT_STEP: "NEXT_STEP",
  PREV_STEP: "PREV_STEP",
  GOTO_STEP: "GOTO_STEP",
  PROFILE_ERROR: "PROFILE_ERROR",
  YEARLY: "YEARLY",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.PROFILE: {
      return {
        ...state,
        profile: {
          ...state.profile,
          [action.payload.key]: action.payload.value,
        },
      };
    }
    case ACTIONS.PLAN: {
      return {
        ...state,
        plan: action.payload,
      };
    }
    case ACTIONS.ADD_ON: {
      return {
        ...state,
        addOns: action.payload,
      };
    }
    case ACTIONS.NEXT_STEP: {
      return {
        ...state,
        currentStep:
          state.currentStep === state.totalStep
            ? state.currentStep
            : state.currentStep + 1,
      };
    }
    case ACTIONS.PREV_STEP: {
      return {
        ...state,
        currentStep: state.currentStep === 1 ? 1 : state.currentStep - 1,
      };
    }

    case ACTIONS.GOTO_STEP: {
      return {
        ...state,
        currentStep:
          action.payload >= 1 && action.payload <= state.totalStep
            ? action.payload
            : state.currentStep,
      };
    }

    case ACTIONS.TEMP_ADD_ON: {
      const newSet = new Set(state.selectedAddOns);
      if (newSet.has(action.payload)) {
        newSet.delete(action.payload);
      } else {
        newSet.add(action.payload);
      }

      return {
        ...state,
        selectedAddOns: newSet,
      };
    }
    case ACTIONS.RESET_ADD_ON: {
      return {
        ...state,
        addOns: [],
        selectedAddOns: new Set(),
      };
    }
    case ACTIONS.PROFILE_ERROR: {
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.key]: action.payload.value,
        },
      };
    }
    case ACTIONS.YEARLY: {
      return {
        ...state,
        isYearly: !state.isYearly,
      };
    }
    default:
      return state;
  }
};

const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider value={[state, dispatch]}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
