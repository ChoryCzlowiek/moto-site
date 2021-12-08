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
  margin: 0.5rem 0;
`;

const StyledParagraphMargin = styled(Paragraph)`
  margin: 1rem 0 3rem;
`;

const ContactData = ({ footer }) => {
  const contactData = footer
    ? [
        <StyledTextWrapper>
          <Paragraph white big>
            AP System Solution
          </Paragraph>
          <Paragraph white big>
            Olsztyn 10-686
          </Paragraph>
          <Paragraph white big>
            Ul. Burskiego 20/15
          </Paragraph>
          <Paragraph white big>
            NIP 739 286 1745
          </Paragraph>
          <Paragraph white big>
            Tel. 606 654 763
          </Paragraph>
          <Paragraph white big>
            Tel. 606 195 089
          </Paragraph>
        </StyledTextWrapper>,
      ]
    : [
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
        </StyledTextWrapper>,
      ];

  return <>{contactData}</>;
};

export default ContactData;
