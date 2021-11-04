import React from "react";
import styled from "styled-components";
import Title from "../atoms/Title";
import List from "../molecules/List";

const StyledDetailsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 30rem;
  padding: 4rem 0;
  border-bottom: ${({ theme, ifLast }) =>
    ifLast ? "none" : `3px solid ${theme.black}`};
`;

const StyledImg = styled.div`
  width: 30rem;
  height: 30rem;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;

const StyledTitle = styled(Title)`
  margin: 0 0 2rem;
`;

const StyledTextWrapper = styled.div`
  flex-basis: 50%;
`;

const DetailsBox = ({ reverse, title, text, img, ifLast }) => {
  console.log(ifLast);
  const detailsView = reverse
    ? [
        <StyledDetailsBox ifLast={ifLast}>
          <StyledTextWrapper>
            <StyledTitle orange>{title}</StyledTitle>
            <List text={text} />
          </StyledTextWrapper>
          <StyledImg img={img} />
        </StyledDetailsBox>,
      ]
    : [
        <StyledDetailsBox ifLast={ifLast}>
          <StyledImg img={img} />
          <StyledTextWrapper>
            <StyledTitle orange>{title}</StyledTitle>
            <List text={text} />
          </StyledTextWrapper>
        </StyledDetailsBox>,
      ];

  return <>{detailsView}</>;
};

export default DetailsBox;
