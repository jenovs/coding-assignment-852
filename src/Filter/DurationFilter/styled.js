import styled from 'styled-components';

import { BREAK_LG } from '../../variables/media';

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

  @media ${BREAK_LG} {
    align-self: center;
    font-size: 12px;
  }
`;

export const Input = styled.input`
  border: 1px solid #a2a2a2;
  border-radius: 1px;
  font-size: 14px;
  padding: 6px;
  margin-right: 10px;
  min-width: 60px;

  @media ${BREAK_LG} {
    padding: 3px;
    min-width: 30px;
    width: 40px;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: center;

  @media ${BREAK_LG} {
    font-size: 12px;
  }
`;
