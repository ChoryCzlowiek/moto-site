import styled from "styled-components";

const Input = styled.input`
  width: 80%;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
  border: 2px solid ${({ theme }) => theme.orange};
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  transition: 0.5s;

  &::placeholder {
    color: ${({ theme }) => theme.black};
  }

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.orange};
    border-radius: 2rem;
  }
`;

export default Input;
