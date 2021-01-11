import styled from 'styled-components';

export const StyledP = styled.p`
  padding: 0;
  margin: 20px 0;
  font-size: 20px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  font-size: 20px;
  margin: 0 5px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: transparent;
  color: #fff;
  outline: none;
  border-radius: 8px;

  &:hover,
  &:focus,
  &:active {
    border: 1px solid rgba(255, 255, 255, 0.7);
    background-color: rgba(255, 255, 255, 0.1);
  }
`;