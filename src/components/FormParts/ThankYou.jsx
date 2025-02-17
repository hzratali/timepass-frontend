import styled from "styled-components";
import ThankYouIcon from "../../assets/Timepass/icon-thank-you.svg";
const ThankYou = () => {
  return (
    <Container>
      <img
        src={ThankYouIcon}
        loading="lazy"
        alt="thank-you"
        height={70}
        width={70}
      />
      <h3>Thank you!</h3>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </Container>
  );
};

export default ThankYou;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    height: 80%;
  }

  h3 {
    color: var(--primary-marine-blue);
    font-size: 24px;
  }

  p {
    text-align: center;
    color: var(--neutral-cool-gray);
    line-height: 26px;
  }
`;
