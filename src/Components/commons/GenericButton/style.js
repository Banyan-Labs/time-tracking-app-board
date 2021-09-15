import styled from 'styled-components';
import { colors } from '../../../styles/Color';

export const ButtonStyle = styled.button`
  background: ${({ backgroundColor }) =>
    backgroundColor ? `${backgroundColor}` : '#FA0'};
  width: ${({ isBlock }) => (isBlock ? '100%' : 'auto')};
  margin: ${({ margin }) => (margin ? '5px 0px 5px 0px' : '0px')};
  color: ${({ color }) => (color ? `${color}` : colors.black)};
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
