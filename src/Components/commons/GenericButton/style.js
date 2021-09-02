import styled from 'styled-components';

export const ButtonStyle = styled.button`
  background: ${({ backgroundColor }) =>
    backgroundColor ? `${background}` : '#FA0'};
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

export const InputStyle = styled.input`
  background: ${({ backgroundColor }) =>
    backgroundColor ? `${background}` : '#FA0'};
  width: ${({ isBlock }) => (isBlock ? '100%' : 'auto')};
  padding: 5px 8px;
  border-radius: 5px 0 5px 0;
  border: none;
  :focus {
    border: none;
    text-decoration: none;
    transform: scale(1.05);
    border-radius: 5px 0 5px 0;
  }
  :active {
    border-radius: 5px 0 5px 0;
  }
`;
