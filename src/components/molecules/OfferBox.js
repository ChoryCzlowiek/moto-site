import React from "react";
import styled from "styled-components";
import Title from "../atoms/Title";
import Paragraph from "../atoms/Paragraph";
import Button from "../atoms/Button";
import { useHistory } from "react-router-dom";

const StyledWrapper = styled.div`
  margin: 0 10rem 4rem;
  position: relative;
  display: flex;
  min-height: 50vh;
`;

const StyledTextWrapper = styled.div`
  flex-basis: 50%;
  padding: 2rem;
  padding-left: ${({ reverse }) => (reverse ? "3rem" : "2rem")};
  padding-right: ${({ reverse }) => (reverse ? "2rem" : "3rem")};
  border: 2px solid ${({ theme }) => theme.orange};
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
`;

const StyledImgWrapper = styled.div`
  flex-basis: 50%;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;

const StyledTitle = styled(Title)`
  margin: 0 0 1rem;
`;

const StyledButton = styled(Button)`
  margin: 2rem 0 0;
`;

const OfferBox = ({ img, reverseOrder, title, text, path }) => {
  const history = useHistory();

  const redirectToSubsite = () => {
    history.push(path);
  };

  const componentsOrder = reverseOrder
    ? [
        <StyledTextWrapper reverse>
          <StyledTitle orange small>
            {title}
          </StyledTitle>
          <Paragraph>{text}</Paragraph>
          <StyledButton onClick={redirectToSubsite}>Więcej...</StyledButton>
        </StyledTextWrapper>,
        <StyledImgWrapper img={img} />,
      ]
    : [
        <StyledImgWrapper img={img} />,
        <StyledTextWrapper>
          <StyledTitle orange small>
            {title}
          </StyledTitle>
          <Paragraph>{text}</Paragraph>
          <StyledButton onClick={redirectToSubsite}>Więcej...</StyledButton>
        </StyledTextWrapper>,
      ];

  return <StyledWrapper>{componentsOrder}</StyledWrapper>;
};

export default OfferBox;
