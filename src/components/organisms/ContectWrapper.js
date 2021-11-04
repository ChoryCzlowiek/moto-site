import React from "react";
import styled from "styled-components";
import contactImg from "../../assets/images/contact.jpeg";
import ContactForm from "../molecules/ContactForm";
import ContactData from "../molecules/ContactData";

const StyledWrapper = styled.div`
  position: relative;
  background-image: url(${contactImg});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  padding: 3rem 0;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const StyledContactData = styled(ContactData)`
  padding: 3rem 0; ;
`;
const ContactWrapper = () => (
  <StyledWrapper>
    <StyledContactData />
    <ContactForm />
  </StyledWrapper>
);

export default ContactWrapper;
