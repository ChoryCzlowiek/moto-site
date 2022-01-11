import styled from "styled-components";

const Title = styled.h1`
  font-family: ${({ theme }) => theme.titleFont};
  letter-spacing: 3px;
  font-size: ${({ small }) => (small ? "1.5rem" : "2.5rem")};
  color: ${({ theme, orange }) => (orange ? theme.black : theme.black)};
  z-index: 2;
`;

export default Title;
