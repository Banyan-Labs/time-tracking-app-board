import styled from 'styled-components';

export const InputStyle = styled.input`
  width: ${({ isBlock }) => (isBlock ? '100%' : 'auto')};
  padding: 5px 8px;
  border-radius: 3px 3px 3px 3px;
  border: solid black 1px;
  :focus {
    border: solid black 1px;
    text-decoration: none;
    transform: scale(1.05);
    border-radius: 3px 3px 3px 3px;
    box-shadow: 0px 0px 3px 2px;
  }
  :active {
    border-radius: 3px 3px 3px 3px;
  }
`;
