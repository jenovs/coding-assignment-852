import styled from 'styled-components';

import { mainColor } from '../../variables/colors';

export const Wrapper = styled.div`
  align-items: center;
  color: #999;
  display: flex;
  font-size: 14px;
  font-weight: bold;
  height: 43px;
  justify-content: center;
  margin-right: 32px;
  margin-top: 16px;
  width: 200px;
`;

export const WrapperMobile = styled(Wrapper)`
  background-color: #fff;
  border-bottom: 1px solid ${mainColor};
  border-top: 1px solid ${mainColor};
  color: ${mainColor};
  font-size: 12px;
  margin-bottom: 20px;
  width: 100%;
`;

export const Select = styled.select`
  border: none;
  background-color: #fff;
  color: #333;
  font-size: 12px;
  height: 100%;
  margin-left: 10px;
  padding-left: 10px;
  width: 130px;
`;

export const SelectMobile = styled(Select)`
  color: ${mainColor};
`;
