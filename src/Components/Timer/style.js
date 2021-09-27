import styled from 'styled-components';
import { testColors } from '../../styles/Color';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${testColors.darkGreen};
  padding: 25px 15px;
  height: 100%;
  width: 100%;
`;

export const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 300;
`;
