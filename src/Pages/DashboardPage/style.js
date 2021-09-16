import styled from 'styled-components';

export const PageContainer2 = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.2rem calc((100vw - 1000px) / 2);
`;

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
`;

export const Card = styled.div`
  width: 80vw;
  min-height: 25vh;
  height: auto;
  border: solid black 2px;
  margin: 10px 10px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DateColumn = styled.div`
  width: 100%;
  height: 20%;
  /* border-top: solid black 2px; */
`;

export const ProjectColumn = styled.div`
  width: 100%;
  height: 20%;
  border-top: solid black 2px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Time = styled.div`
  /* width: 100%; */
  margin: 0px 15px 0px 0px;
  height: 20%;
`;
