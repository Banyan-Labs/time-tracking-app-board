import styled from 'styled-components';
import { colors } from '../../../styles/Color';

export const ButtonStyle = styled.button`
  background: ${({ backgroundColor }) =>
    backgroundColor ? `${backgroundColor}` : '#FA0'};
  width: ${({ isBlock }) => (isBlock ? '100%' : 'auto')};
  margin: ${({ margin }) => (margin ? '5px 0px 5px 0px' : '0px')};
  color: ${({ lightText }) => (lightText ? colors.white : colors.black)};
  font-weight: ${({ fontWeight }) => (fontWeight ? 'bold' : 'none')};
  padding: 5px 8px;
  border-radius: 3px 3px 3px 3px;
  border: none;
  :focus {
    border: none;
    text-decoration: none;
  }
  :active {
    transform: scale(1.1);
  }
`;
