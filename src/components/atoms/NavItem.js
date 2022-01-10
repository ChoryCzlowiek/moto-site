import styled from "styled-components";

const NavItem = styled.li`
  font-family: ${({ theme, bold }) =>
    bold ? theme.textBoldFont : theme.textFont};
  color: ${({ theme, black }) => (black ? theme.black : theme.black)};
  cursor: pointer;
  margin: 0 1rem;
  font-size: ${({ title }) => (title ? "2.8rem" : "1.8rem")};

  &:hover {
    color: ${({ theme, black }) => (black ? theme.orange : theme.orange)};
  }

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export default NavItem;
