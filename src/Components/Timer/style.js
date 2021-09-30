import styled from 'styled-components';
import { colors } from '../../styles/Color';

export const Container = styled.div`
  height: 70px;
  background: ${colors.grey};
  padding: 0.2rem calc((100vw - 1000px) / 2);
  display: flex;
  align-items: center;
`;

export const ToggleButton = styled.button`
  font-size: 30px;
  padding: 10px;
  background: ${({ running }) => (running ? 'red' : 'green')};
  border-radius: 50%;
  border: none;
  color: white;
  line-height: 20px;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.6);
  transition: all 70ms ease-in-out;

  &:active {
    transform: translateY(2px);
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  }
`;

export const TimeWrapper = styled.div`
  background: #222;
  padding: 8px 14px;
  border-radius: 4px;
  margin: 0 20px;
  width: 200px;
  text-align: center;
`;

export const TimeText = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: white;
  font-family: 'Audiowide';
`;

export const Form = styled.form``;

export const TimeDescription = styled.input`
  font-family: 'Roboto';
  font-size: 28px;
  padding-left: 14px;
  background: transparent;
  border: none;
  vertical-align: middle;
`;

export const SubmitButton = styled.button`
  font-size: 32px;
  line-height: 20px;
  vertical-align: middle;
`;
