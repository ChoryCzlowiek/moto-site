import React from "react";
import styled from "styled-components";
import SectionWithTitle from "../molecules/SectionWithTitle";
import BenefitsBox from "../molecules/BenefitsBox";
import { pages } from "../../const/pages";
import clipImg from "../../assets/images/clipBoxImg.jpg";

const StyledBenefitsWrapper = styled.div`
  margin: 0 0 3rem;
  padding: 0 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    ". first"
    "second first"
    "second third"
    ". third";
  gap: 3rem 2rem;
`;

const StyledClipImg = styled.div`
  min-height: 60vh;
  background-image: url(${clipImg});
  background-size: cover;
  background-position: 50% 80%;
  clip-path: polygon(0% 0%, 100% 0, 100% 63%, 50% 100%, 0 63%);
`;

const BenefitsWrapper = () => {
  let counter = 0;

  return (
    <SectionWithTitle title="Co oferuje OneSerwis, jako sieć warsztatów – niezawodne funkcje">
      <StyledClipImg />
      <StyledBenefitsWrapper>
        {pages.zalety.items.map((item) => {
          counter++;
          return (
            <BenefitsBox
              text={item.text}
              title={item.title}
              gridArea={item.gridArea}
              counter={counter}
            />
          );
        })}
      </StyledBenefitsWrapper>
    </SectionWithTitle>
  );
};

export default BenefitsWrapper;
