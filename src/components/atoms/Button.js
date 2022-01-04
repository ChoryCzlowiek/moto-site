import styled from "styled-components";

const Button = styled.button`
  max-width: 10rem;
  padding: 0.9rem 1rem;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.titleFont};
  color: ${({ theme }) => theme.black};
  border: 2px solid ${({ theme }) => theme.orange};
  border-radius: 0rem;
  background-color: ${({ theme }) => theme.orange};
  cursor: pointer;
  transition: 1s;
  z-index: 90;

  &:hover {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.black};
    border: 2px solid ${({ theme }) => theme.black};
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
