import React from "react";
import OfferBox from "../molecules/OfferBox";
import SectionWithTitle from "../molecules/SectionWithTitle";
import program from "../../assets/images/program.png";
import expert from "../../assets/images/radca.jpg";
import advertisement from "../../assets/images/www.jpg";
import { pages } from "../../const/pages";

const OfferWrapper = () => (
  <SectionWithTitle title="OneSerwis współpracuje z ADAC, a co dokładnie otrzymuje warsztat przy dołączeniu do OneSerwis?">
    {pages.ofertaDetale.subsites.map((subsite) => {
      let image;

      switch (subsite.img) {
        case "program":
          image = program;
          break;
        case "expert":
          image = expert;
          break;
        case "advertisement":
          image = advertisement;
          break;
        default:
          break;
      }

      if (subsite.reverse) {
        return (
          <OfferBox
            reverseOrder
            title={subsite.title}
            text={subsite.text}
            img={image}
            path={subsite.path}
            location={subsite.location}
          />
        );
      } else {
        return (
          <OfferBox
            title={subsite.title}
            text={subsite.text}
            img={image}
            path={subsite.path}
            location={subsite.location}
          />
        );
      }
    })}
  </SectionWithTitle>
);

export default OfferWrapper;
