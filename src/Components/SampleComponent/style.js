import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  height: 100%;
  padding: 0.2rem calc((100vw - 1000px) / 2);
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: burlywood;
  padding: 25px 15px;
  height: 100%;
  width: 100%;
`;

export const Label = styled.div`
  margin: 0 0 10px;
`;

export const LinksWrapper = styled.div`
  border: 1px solid black;
  padding: 24px;
  background: whitesmoke;

  button {
    margin: 0 12px;
  }
`;

export const ServerTestContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  background: tomato;
  padding: 16px 0;
`;

export const ServerTestWrapper = styled.div`
  background: white;
  width: 48%;
  padding: 10px;
  border: 3px solid black;
`;

export const ServerStatusBadge = styled.span`
  float: right;
  padding: 6px;
  margin: 0 0 6px;
  background: ${({ status }) =>
    status === null ? 'yellow' : status === 200 ? 'green' : 'red'};
  color: black;
  font-weight: 600;
  border-radius: 4px;
  opacity: ${({ status }) => (status === null ? '0.7' : '1')};
`;

export const SwatchesContainer = styled.div`
  width: 100%;
  border: 2px solid black;
  padding: 16px;
`;

export const SwatchesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid black;
  padding: 4px;
  margin: 0 0 10px;
`;

export const Details = styled.span`
  font-weight: 600;
  margin: 0 6px;
`;

export const ColorBox = styled.div`
  width: ${95 / 5 + '%'};
  height: 30px;
  background: ${({ color }) => color};
  margin: 0 0 6px;

  ::before {
    content: ${({ label }) => `'${label}:'`};
    font-size: 14px;
  }
  ::after {
    content: ${({ hex }) => `' ${hex}'`};
    font-size: 14px;
  }
`;

export const SelectedColorWrapper = styled.div`
  width: 100%;
  text-align: center;
`;
