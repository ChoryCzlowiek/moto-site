import React from "react";
import styled from "styled-components";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Title from "../atoms/Title";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 40%;
  padding: 3rem;
  border-radius: 2rem;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.3);
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const StyledTitle = styled(Title)`
  margin: 0 0 2rem;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const StyledSubtitle = styled(Title)`
  margin: 0 0 1rem;
  color: ${({ theme }) => theme.white};
`;

const StyledButton = styled(Button)`
  width: 20%;
  margin: 2rem 0 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledInput = styled(Input)`
  min-height: 20vh;
  color: ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.white};
  margin: 0.5rem 0;

  &::placeholder {
    color: ${({ theme }) => theme.black};
  }
`;

const ContactForm = () => (
  <StyledForm>
    <StyledTitle orange>Skontaktuj sie z nami</StyledTitle>
    <StyledSubtitle small orange>
      Napisz do nas
    </StyledSubtitle>
    <Input placeholder="Nazwa Firmy" required />
    <Input placeholder="Imię i Nazwisko" required />
    <Input placeholder="E-mail" required />
    <Input placeholder="Numer Telefonu" required />
    <StyledInput as="textarea" placeholder="Napisz wiadomość" required />
    <StyledButton>Wyslij</StyledButton>
  </StyledForm>
);

export default ContactForm;
