import styled from "styled-components";

const Title = styled.h1`
  font-family: ${({ theme }) => theme.titleFont};
  letter-spacing: 3px;
  font-size: ${({ small }) => (small ? "2rem" : "4rem")};
  color: ${({ theme, yellow }) => (yellow ? theme.yellow : theme.white)};
`;

export default Title;
