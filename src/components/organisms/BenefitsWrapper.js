import React from "react";
import styled from "styled-components";
import SectionWithTitle from "../molecules/SectionWithTitle";
import BenefitsBox from "../molecules/BenefitsBox";
import { pages } from "../../const/pages";
import clipImg from "../../assets/images/clipBoxImg.jpg";
import clipImg2 from "../../assets/images/clipBoxImg2.jpeg";

const StyledBenefitsWrapper = styled.div`
  margin: 4rem 0;
  padding: 0 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    ". first"
    "second first"
    "second third"
    "fourth third"
    "fourth .";
  gap: 5rem 2rem;
`;

const StyledClipImg = styled.div`
  min-height: 60vh;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: ${({ down }) => (down ? "50% 50%" : "50% 80%")};
  clip-path: ${({ down }) =>
    down
      ? "polygon(0 37%, 50% 0, 100% 37%, 100% 100%, 0% 100%)"
      : "polygon(0% 0%, 100% 0, 100% 63%, 50% 100%, 0 63%)"};
`;

const BenefitsWrapper = () => {
  let counter = 0;

  return (
    <SectionWithTitle title="Co oferuje OneSerwis, jako sieć warsztatów – niezawodne funkcje">
      <StyledClipImg img={clipImg} />
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
      <StyledClipImg down img={clipImg2} />
    </SectionWithTitle>
  );
};

export default BenefitsWrapper;
