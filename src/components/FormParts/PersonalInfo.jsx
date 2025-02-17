import styled from "styled-components";
import { ACTIONS, useFormSteps } from "../../context/FormProvider";

const PersonalInfo = () => {
  const [{ profile, errors }, dispatch] = useFormSteps();

  const onChange = (e) => {
    if (e.target.value.length)
      dispatch({
        type: ACTIONS.PROFILE_ERROR,
        payload: { key: e.target.name, value: null },
      });
    dispatch({
      type: ACTIONS.PROFILE,
      payload: {
        key: e.target.name,
        value: e.target.value,
      },
    });
  };
  return (
    <div>
      <FormGroup>
        <Label>
          Name
          {!!errors.name && <Error>{errors.name}</Error>}
        </Label>
        <Input
          name="name"
          type="text"
          value={profile.name}
          onChange={onChange}
          required
          placeholder="e.g. Stephen King"
          error={!!errors.name}
        />
      </FormGroup>
      <FormGroup>
        <Label>
          Email Address
          {!!errors.name && <Error>{errors.name}</Error>}
        </Label>
        <Input
          name="email"
          type="email"
          value={profile.email}
          onChange={onChange}
          required
          placeholder="e.g. stephenking@lorem.com"
          error={!!errors.email}
        />
      </FormGroup>

      <FormGroup>
        <Label>
          Phone Number
          {!!errors.name && <Error>{errors.name}</Error>}
        </Label>
        <Input
          name="phone"
          type="tel"
          value={profile.phone}
          onChange={onChange}
          required
          error={!!errors.phone}
          placeholder="e.g. +1 234 567 890"
        />
      </FormGroup>
    </div>
  );
};

export default PersonalInfo;

const FormGroup = styled.div`
  max-width: 100%;
  margin-bottom: 20px;
`;
const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: var(--primary-marine-blue);
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.625rem 0.75rem;
  font-size: 1rem;
  line-height: 1.4;
  color: var(--primary-marine-blue);
  background-color: #fff;
  background-clip: padding-box;
  border: ${({ error }) =>
    error
      ? `1px solid var(--primary-strawberry-red)`
      : `1px solid var(--neutral-light-gray)`};
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out;
  box-sizing: border-box;
  font-weight: 500;

  &::placeholder {
    color: var(--neutral-cool-gray);
    font-weight: 500;
  }

  &:focus {
    border-color: ${({ error }) =>
      error ? `var(--primary-strawberry-red)` : `var(--primary-purplish-blue)`};
    outline: 0;
  }

  &:hover {
    border-color: ${({ error }) =>
      error ? `var(--primary-strawberry-red)` : `var(--primary-purplish-blue)`};
  }
`;

const Error = styled.span`
  float: right;
  color: var(--primary-strawberry-red);
  font-weight: bold;
`;
