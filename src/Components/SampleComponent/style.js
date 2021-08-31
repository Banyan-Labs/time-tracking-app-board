import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: burlywood;
  padding: 25px 15px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 4px;
  background: chartreuse;
`;

export const Card = styled.div`
  background: white;
  border: 1px solid black;
  border-radius: 4px;
  padding: 8px 16px;
`;

export const Text = styled.h1`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: 500;
`;
