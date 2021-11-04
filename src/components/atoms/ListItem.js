import styled from "styled-components";

const ListItem = styled.li`
  font-family: ${({ theme, bold }) =>
    bold ? theme.textBoldFont : theme.textFont};
  color: ${({ theme }) => theme.black};
  font-size: 1.3rem;
  margin: 1rem 0;
`;

export default ListItem;
