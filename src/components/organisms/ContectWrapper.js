import React from "react";
import styled from "styled-components";
import contactImg from "../../assets/images/contact.jpeg";
import ContactForm from "../molecules/ContactForm";
import Paragraph from "../atoms/Paragraph";

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

const StyledTextWrapper = styled.div`
  z-index: 2;
  padding: 3rem 0;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 1rem 0;
`;

const StyledParagraphMargin = styled(Paragraph)`
  margin: 1rem 0 3rem;
`;

const ContactWrapper = () => (
  <StyledWrapper>
    <StyledTextWrapper>
      <StyledParagraph white big>
        AP System Solution
      </StyledParagraph>
      <StyledParagraph white big>
        Olsztyn 10-686
      </StyledParagraph>
      <StyledParagraph white big>
        Ul. Burskiego 20/15
      </StyledParagraph>
      <StyledParagraphMargin white big>
        NIP 739 286 1745
      </StyledParagraphMargin>
      <StyledParagraph white big>
        Tel. 606 654 763
      </StyledParagraph>
      <StyledParagraph white big>
        Tel. 606 195 089
      </StyledParagraph>
      <StyledParagraph white big>
        Email: kontakt@oneserwis.pl
      </StyledParagraph>
    </StyledTextWrapper>
    <ContactForm />
  </StyledWrapper>
);

export default ContactWrapper;
