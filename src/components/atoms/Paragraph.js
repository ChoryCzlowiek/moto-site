import styled from "styled-components";

const Paragraph = styled.p`
  font-family: ${({ theme, bold }) =>
    bold ? theme.textBoldFont : theme.textFont};
  color: ${({ theme }) => theme.black};
  line-height: 1.3rem;
`;

export default Paragraph;
