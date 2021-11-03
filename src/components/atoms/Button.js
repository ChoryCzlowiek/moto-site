import styled from "styled-components";

const Button = styled.button`
  max-width: 10rem;
  padding: 0.3rem 1rem;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.titleFont};
  color: ${({ theme }) => theme.black};
  border: 2px solid ${({ theme }) => theme.orange};
  border-radius: 3rem;
  /* box-shadow: 0 0 10px 4px ${({ theme }) => theme.orange}; */
  background-color: ${({ theme }) => theme.orange};
  cursor: pointer;
  transition: 1s;

  &:hover {
    color: ${({ theme }) => theme.white};
    /* box-shadow: 0 0 10px 4px ${({ theme }) => theme.black}; */
    background-color: ${({ theme }) => theme.black};
    border: 2px solid ${({ theme }) => theme.black};
  }

  &:focus {
    outline: none;
  }
`;

export default Button;
