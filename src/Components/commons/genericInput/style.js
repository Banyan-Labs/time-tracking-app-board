import styled from 'styled-components';

export const InputStyle = styled.input`
  width: ${({ isBlock }) => (isBlock ? '100%' : 'auto')};
  padding: 5px 8px;
  border-radius: 5px 0 5px 0;
  border: solid black 1px;
  :focus {
    border: none;
    text-decoration: none;
    transform: scale(1.05);
    border-radius: 5px 0 5px 0;
    box-shadow: 0px 0px 3px 2px;
  }
  :active {
    border-radius: 5px 0 5px 0;
  }
`;
