import styled from 'styled-components';
import Background from '../../resources/images/gold.png';

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  background-image: url(${Background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 75%;
`;
