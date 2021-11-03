import React from "react";
import styled from "styled-components";
import Title from "../atoms/Title";
import Paragraph from "../atoms/Paragraph";
import Button from "../atoms/Button";

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

const OfferBox = ({ img, reverseOrder }) => {
  const componentsOrder = reverseOrder
    ? [
        <StyledTextWrapper reverse>
          <StyledTitle orange small>
            Przykladowy pakiet
          </StyledTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
            imperdiet enim. In faucibus nisi et rhoncus finibus. Nulla auctor,
            magna at faucibus laoreet, quam sem rutrum elit, eget euismod eros
            libero at nunc. In tincidunt orci non nunc finibus interdum. Integer
            tristique ante in ultricies sagittis. Morbi tincidunt libero sem,
            fermentum pharetra leo porta id.
          </Paragraph>
          <StyledButton>Czytaj wiecej</StyledButton>
        </StyledTextWrapper>,
        <StyledImgWrapper img={img} />,
      ]
    : [
        <StyledImgWrapper img={img} />,
        <StyledTextWrapper>
          <StyledTitle orange small>
            Przykladowy pakiet
          </StyledTitle>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
            imperdiet enim. In faucibus nisi et rhoncus finibus. Nulla auctor,
            magna at faucibus laoreet, quam sem rutrum elit, eget euismod eros
            libero at nunc. In tincidunt orci non nunc finibus interdum. Integer
            tristique ante in ultricies sagittis. Morbi tincidunt libero sem,
            fermentum pharetra leo porta id.
          </Paragraph>
          <StyledButton>Czytaj wiecej</StyledButton>
        </StyledTextWrapper>,
      ];

  return (
    <StyledWrapper>
      {/* <BorderBox /> */}
      {componentsOrder}
    </StyledWrapper>
  );
};

export default OfferBox;
