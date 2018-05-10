import styled from 'styled-components';

export const Button = styled.button`
  background-color: #409cd1;
  border: none;
  border-radius: 1px;
  font-weight: bold;
  padding: 6px 8px;
  color: #fff;

  &:active {
    background-color: hsla(202, 61%, 50%, 1);
  }
`;

export const Input = styled.input`
  border: 1px solid #a2a2a2;
  border-radius: 1px;
  font-size: 14px;
  padding: 6px;
  margin-right: 10px;
  min-width: 60px;
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: center;
`;
