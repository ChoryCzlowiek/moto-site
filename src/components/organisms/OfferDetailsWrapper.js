import React from "react";
import styled from "styled-components";
import SectionWithTitle from "../molecules/SectionWithTitle";
import DetailsBox from "../molecules/DetailsBox";
import { pages } from "../../const/pages";
import legalProtection from "../../assets/images/legalProtection.jpg";
import assistant from "../../assets/images/assistant.jpg";
import program from "../../assets/images/program.jpg";
import trainings from "../../assets/images/trainings.jpg";

const StyledWrapper = styled.div`
  margin: 0 10rem 3rem;
`;

const OfferDetailsWrapper = ({ name }) => (
  <SectionWithTitle title={pages[name].name}>
    <StyledWrapper>
      {pages[name].items.map((el, i) => {
        let image;
        let ifLast = false;

        switch (el.img) {
          case "assistant":
            image = assistant;
            break;
          case "legalProtection":
            image = legalProtection;
            break;
          case "trainings":
            image = trainings;
            break;
          case "program":
            image = program;
            break;
          default:
            break;
        }

        if (pages[name].items.length === i + 1) {
          ifLast = true;
        }

        if (el.reverse) {
          return (
            <DetailsBox
              reverse
              title={el.title}
              text={el.textList}
              img={image}
              ifLast={ifLast}
            />
          );
        } else {
          return (
            <DetailsBox
              ifLast={ifLast}
              title={el.title}
              text={el.textList}
              img={image}
            />
          );
        }
      })}
    </StyledWrapper>
  </SectionWithTitle>
);

export default OfferDetailsWrapper;
