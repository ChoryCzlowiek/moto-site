import React from "react";
import styled from "styled-components";
import Title from "../atoms/Title";
import Paragraph from "../atoms/Paragraph";

const StyledBenefitsBox = styled.div`
  grid-area: ${({ gridArea }) => gridArea};
  display: flex;
  align-items: center;
`;

const StyledNumber = styled(Title)`
  font-size: 4rem;
`;

const StyledTitle = styled(Title)`
  margin: 0 0 2rem;
`;

const StyledTextWrapper = styled.div`
  margin: 0 0 0 2rem;
`;

const BenefitsWrapper = ({ gridArea, text, title, counter }) => (
  <StyledBenefitsBox gridArea={gridArea}>
    <StyledNumber orange>0{counter}</StyledNumber>
    <StyledTextWrapper>
      <StyledTitle orange>{title}</StyledTitle>
      <Paragraph>{text}</Paragraph>
    </StyledTextWrapper>
  </StyledBenefitsBox>
);

export default BenefitsWrapper;
