import React from "react";
import styled from "styled-components";
import contactImg from "../../assets/images/contact.jpg";
import ContactForm from "../molecules/ContactForm";
import SectionWithTitle from "../molecules/SectionWithTitle";

const StyledWrapper = styled.div`
  display: flex;
  margin: 3rem;
  box-shadow: 0 0 10px 10px ${({ theme }) => theme.black};
`;

const StyledBgcImg = styled.div`
  flex-basis: 50%;
  background-image: url(${contactImg});
  background-size: cover;
  background-position: center;
  filter: grayscale(0.8);
`;

const StyledFormWrapper = styled.div`
  flex-basis: 50%;
  padding: 3rem;
  background-color: ${({ theme }) => theme.black};
`;

const ContactWrapper = () => (
  <SectionWithTitle title="Jezeli masz do nas jakas sprawe, napisz wiadomosc">
    <StyledWrapper>
      <StyledBgcImg />
      <StyledFormWrapper>
        <ContactForm />
      </StyledFormWrapper>
    </StyledWrapper>
  </SectionWithTitle>
);

export default ContactWrapper;
