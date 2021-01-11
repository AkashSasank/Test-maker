import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  text-align: center;
  margin: 0 auto;
`;

export const Heading = styled.div`
  font-size: 56px;
  margin: 30px 0;
`;

export const Message = styled.p`
  font-size: 20px;
  margin: 20px 0;
  padding: 0;
`;

export const Back = styled.a`
  display: inline-block;
  background-color: #ccc;
  color: #505050;
  border-radius: 8px;
  padding: 10px 15px;
  text-decoration: none;

  &:hover {
    color: #fff;
    background-color: #ff4783;
  }
`;