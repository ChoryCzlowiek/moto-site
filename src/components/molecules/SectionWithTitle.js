import React from "react";
import Title from "../atoms/Title";
import styled from "styled-components";

const StyledTitle = styled(Title)`
  margin: 3rem 10rem;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    font-size: 24px;
    padding: 1rem;
  }
`;

const SectionWithTitle = ({ title, children }) => (
  <>
    <StyledTitle>{title}</StyledTitle>
    {children}
  </>
);

export default SectionWithTitle;
