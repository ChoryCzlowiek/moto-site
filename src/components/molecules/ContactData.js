import React from "react";
import styled from "styled-components";
import Paragraph from "../atoms/Paragraph";

const StyledTextWrapper = styled.div`
  z-index: 2;
  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    order: 2;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0.35rem 0;
  font-family: "Lato";
  font-weight: 500;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const StyledParagraphMargin = styled(Paragraph)`
  margin: 1rem 0 3rem;
`;

const ContactData = ({ footer }) => {
  const contactData = footer
    ? [
        <StyledTextWrapper>
          <StyledParagraph white big>
            AP System Solution Sp. z o.o.
          </StyledParagraph>
          <StyledParagraph white big>
            Olsztyn 10-686
          </StyledParagraph>
          <StyledParagraph white big>
            Ul. Burskiego 20/15
          </StyledParagraph>
          <StyledParagraph white big>
            NIP 739 396 1064
          </StyledParagraph>
          <StyledParagraph white big>
            +48 606 195 089
          </StyledParagraph>
          <StyledParagraph white big>
            +48 606 654 763
          </StyledParagraph>
        </StyledTextWrapper>,
      ]
    : [
        <StyledTextWrapper>
          <StyledParagraph white big>
            AP System Solution Sp. z o.o.
          </StyledParagraph>
          <StyledParagraph white big>
            Olsztyn 10-686
          </StyledParagraph>
          <StyledParagraph white big>
            Ul. Burskiego 20/15
          </StyledParagraph>
          <StyledParagraph white big>
            NIP 739 396 1064
          </StyledParagraph>
          <StyledParagraph white big>
            +48 606 195 089
          </StyledParagraph>
          <StyledParagraph white big>
            +48 606 654 763
          </StyledParagraph>
        </StyledTextWrapper>,
      ];

  return <>{contactData}</>;
};

export default ContactData;
