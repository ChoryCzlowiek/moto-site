import React from "react";
import Title from "../atoms/Title";
import styled from "styled-components";

const StyledTitle = styled(Title)`
  margin: 3rem 0;
  text-align: center;
`;

const SectionWithTitle = ({ title, children }) => (
  <>
    <StyledTitle>{title}</StyledTitle>
    {children}
  </>
);

export default SectionWithTitle;
