import styled from "styled-components";

const Paragraph = styled.p`
  font-family: ${({ theme, bold }) =>
    bold ? theme.textBoldFont : theme.textFont};
  color: ${({ theme, white }) => (white ? theme.white : theme.black)};
  font-size: ${({ theme, big }) => (big ? "1.5rem" : "1rem")};
  line-height: 1.7rem;
`;

export default Paragraph;
