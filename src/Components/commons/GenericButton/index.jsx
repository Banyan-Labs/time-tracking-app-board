import React from 'react';
import { ButtonStyle } from './style';

const GenericButton = ({ text, onClick, backgroundColor, isBlock }) => (
  <ButtonStyle
    onCLick={onClick}
    backgroundColor={backgroundColor}
    isBlock={isBlock}
  >
    {text}
  </ButtonStyle>
);

export default GenericButton;
