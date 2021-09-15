import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80%;
  min-width: 40%;
  min-height: 80%;
  margin-top: 5%;
  max-height: auto;
  border: solid black 1px;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 2px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 60vh;
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 25%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 40%;
`;

export const BorderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const BorderLine = styled.div`
  border-top: solid black 1px;
  width: 180px;
  margin: 0px 10px 0px 10px;
`;

export const Assistance = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 5px 0 5px 0;
`;
