import styled from "styled-components";

const ListItem = styled.li`
  font-family: ${({ theme, title }) =>
    title ? theme.titleFont : theme.textBoldFont};
  color: ${({ theme, black }) => (black ? theme.black : theme.orange)};
  cursor: pointer;
  margin: 0 1rem;
  font-size: ${({ title }) => (title ? "2rem" : "1.3rem")};
  text-shadow: 0 2px 3px
    ${({ theme, black }) => (black ? theme.orange : theme.black)};

  &:hover {
    color: ${({ theme, black }) => (black ? theme.orange : theme.black)};
  }

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default ListItem;
