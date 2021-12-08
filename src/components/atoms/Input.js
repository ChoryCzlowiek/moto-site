import styled from "styled-components";

const Input = styled.input`
  width: 80%;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  border: 2px solid ${({ theme }) => theme.orange};
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  font-family: ${({ theme }) => theme.titleFont};
  transition: 0.5s;

  @media (max-width: 768px) {
    width: 100%;
  }

  &::placeholder {
    color: ${({ theme }) => theme.black};
    font-family: ${({ theme }) => theme.titleFont};
  }

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.orange};
    border-radius: 2rem;
  }
`;

export default Input;
