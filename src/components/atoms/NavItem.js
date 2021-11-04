import styled from "styled-components";

const NavItem = styled.li`
  font-family: ${({ theme, title }) =>
    title ? theme.titleFont : theme.textBoldFont};
  color: ${({ theme, black }) => (black ? theme.black : theme.orange)};
  cursor: pointer;
  margin: 0 1rem;
  font-size: ${({ title }) => (title ? "2rem" : "1.3rem")};

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

export default NavItem;
