import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #030305;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  max-height: 30px;
`;

export const AppTitle = styled.div`
  font-family: 'Roboto';
  font-weight: 400;
  color: #fefefe;
  font-size: clamp(18px, 4vw, 18px);
  cursor: pointer;
`;
export const CompanyWrapper = styled.div`
  font-family: 'Roboto';
  font-weight: 500;
  color: #fefefe;
  font-size: clamp(18px, 4vw, 18px);
  cursor: pointer;
`;
