import React from 'react';
import { InputStyle } from './style';

const GenericButton = ({
  placeholder,
  text,
  onClick,
  backgroundColor,
  isBlock,
}) => (
  <InputStyle
    onCLick={onClick}
    backgroundColor={backgroundColor}
    isBlock={isBlock}
    placeholder={placeholder}
  >
    {text}
  </InputStyle>
);

export default GenericButton;
