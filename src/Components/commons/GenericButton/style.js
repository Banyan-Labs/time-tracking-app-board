import styled from 'styled-components';

export const ButtonStyle = styled.button`
  background: ${({ backgroundColor }) =>
    backgroundColor ? `${backgroundColor}` : '#FA0'};
  width: ${({ isBlock }) => (isBlock ? '100%' : 'auto')};
  padding: 5px 8px;
  border-radius: 5px 0 5px 0;
  border: none;
  :focus {
    border: none;
    text-decoration: none;
  }
  :active {
    transform: scale(1.1);
  }
`;
