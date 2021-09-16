import styled from 'styled-components';
import { colors, testColors } from '../../styles/Color';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${testColors.black5};
  padding: 0.2rem calc((100vw - 1300px) / 2);
  max-height: 30px;
`;

export const AppTitle = styled.div`
  font-family: 'Roboto';
  font-weight: 400;
  color: ${colors.white};
  font-size: clamp(14px, 4vw, 22px);
  cursor: pointer;
`;
export const CompanyWrapper = styled.div`
  font-family: 'Roboto';
  font-weight: 500;
  color: ${colors.white};
  font-size: clamp(14px, 4vw, 22px);
  cursor: pointer;
`;
