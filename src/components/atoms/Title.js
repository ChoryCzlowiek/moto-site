import styled from "styled-components";

const Title = styled.h1`
  font-family: ${({ theme }) => theme.titleFont};
  letter-spacing: 3px;
  font-size: ${({ small }) => (small ? "2rem" : "3rem")};
  color: ${({ theme, orange }) => (orange ? theme.orange : theme.black)};
`;

export default Title;
