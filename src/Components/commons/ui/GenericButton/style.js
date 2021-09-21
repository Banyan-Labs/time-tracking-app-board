import styled from 'styled-components';
import { colors } from '../../../../styles/Color';

export const ButtonStyle = styled.button`
  background: ${({ backgroundColor }) =>
    backgroundColor ? `${backgroundColor}` : '#FA0'};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}` : '16px')};
  width: ${({ isBlock }) => (isBlock ? '100%' : 'auto')};
  margin: ${({ margin }) => (margin ? '5px 0px 5px 0px' : '0px')};
  color: ${({ lightText }) => (lightText ? colors.white : colors.black)};
  /* font-weight: ${({ fontWeight }) => (fontWeight ? 'bold' : 'none')}; */
  font-weight: bold;
  padding: ${({ padding }) => (padding ? `${padding}` : 'none')};
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

export const Span = styled.span`
  border-right: solid ${colors.black} 1px;
  float: left;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
