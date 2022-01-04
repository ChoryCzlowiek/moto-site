import React, { useState } from "react";
import styled from "styled-components";
import { send } from 'emailjs-com';
import Yup from "yup";
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

const StyledLabel = styled('label')`
  color: white;
  width: 90%;
  font-size: 12px;
  line-height: 18px;
`;

const FormGroup = styled('div')`
  display: flex;
  flex-flow: row wrap;
  align-items: start;
  gap: 10px;
  max-width: 350px;
  & > input {
    max-width: 15px;
  }
  }
`;

export default function ContactForm() {
  const [toSend, setToSend] = useState({
    v_company: '',
    v_name_surname: '',
    v_email: '',
    v_phone: '',
    v_message: '',
    v_rodo: ''
  });
  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_cte0f2g',
      'template_5iszxum',
      toSend,
      'user_0OKiWcMbL60qk13kLAzdz'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    console.log(toSend);
  };

  return (
    <StyledForm>
      <StyledTitle orange>Skontaktuj się z nami</StyledTitle>
      <StyledSubtitle small orange>
        Napisz do nas
      </StyledSubtitle>
      <Input name="v_company" value={toSend.v_company} onChange={handleChange} placeholder="Nazwa Firmy" required />
      <Input name="v_name_surname" value={toSend.v_name_surname} onChange={handleChange} placeholder="Imię i Nazwisko" required />
      <Input name="v_email" value={toSend.v_email} onChange={handleChange} placeholder="E-mail" required />
      <Input name="v_phone" value={toSend.v_phone} onChange={handleChange} placeholder="Numer Telefonu" required />
      <StyledInput name="v_message" value={toSend.v_message} onChange={handleChange} as="textarea" placeholder="Napisz wiadomość" required />
      <FormGroup>
        <Input name="v_rodo" value={toSend.v_rodo} onChange={handleChange} type="checkbox" id="rodo" required />
        <StyledLabel for="rodo">
          Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z ustawą o ochronie danych
          osobowych w celu (np. wysyłania infomacji handlowej). Podanie danych osobowych jest dobrowolne.
          Zostałem poinformowany, że przysługuje mi prawo dostępu do swoich danych, możliwości ich
          poprawiania, żądania zaprzestania ich przetwarzania. Administratorem danych jest OneSerwis.
        </StyledLabel>
      </FormGroup>
      <StyledButton onClick={onSubmit}>Wyślij</StyledButton>
    </StyledForm>
  );
}
