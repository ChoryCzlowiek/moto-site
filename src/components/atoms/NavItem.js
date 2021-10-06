import styled from "styled-components";

const ListItem = styled.li`
  font-family: ${({ theme }) => theme.textBoldFont};
  color: ${({ theme }) => theme.yellow};
  cursor: pointer;
  margin: 0 1rem;
  font-size: 1.3rem;

  &:hover {
    color: ${({ theme }) => theme.orange};
  }

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: ${({ theme }) => theme.blue};
  }
`;

export default ListItem;
