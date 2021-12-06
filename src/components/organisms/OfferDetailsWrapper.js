import React from "react";
import styled from "styled-components";
import SectionWithTitle from "../molecules/SectionWithTitle";
import DetailsBox from "../molecules/DetailsBox";
import { pages } from "../../const/pages";
import legalProtection from "../../assets/images/legalProtection.jpg";
import assistant from "../../assets/images/assistant.jpg";
import program from "../../assets/images/program.png";
import trainings from "../../assets/images/trainings.jpg";
import media from "../../assets/images/media.jpg";
import google from "../../assets/images/google.jpg";
import wwwDetails from "../../assets/images/wwwDetails.jpg";
import branding from "../../assets/images/branding.jpg";

const StyledWrapper = styled.div`
  margin: 0 8rem 3rem;
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
          case "media":
            image = media;
            break;
          case "wwwDetails":
            image = wwwDetails;
            break;
          case "google":
            image = google;
            break;
          case "branding":
            image = branding;
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
