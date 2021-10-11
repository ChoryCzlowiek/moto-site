import React from "react";
import styled from "styled-components";

const StyledBorder = styled.div`
  position: absolute;
  left: 5%;
  top: 5%;
  height: 90%;
  width: 90%;
  border: 3px solid ${({ theme }) => theme.yellow};
  border-top: none;
`;

const BorderTopLeft = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 10%;
  height: 100%;
  border-top: 3px solid ${({ theme }) => theme.yellow};
`;

const BorderTopRight = styled(BorderTopLeft)`
  left: 90%;
`;

const Border = ({ children }) => (
  <StyledBorder>
    <BorderTopLeft />
    <BorderTopRight />
    {children}
  </StyledBorder>
);

export default Border;
