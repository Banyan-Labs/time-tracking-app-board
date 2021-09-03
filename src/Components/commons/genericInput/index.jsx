import React from 'react';
import { InputStyle } from './style';

const GenericInput = ({
  placeholder,
  text,
  onChange,
  backgroundColor,
  isBlock,
}) => (
  <InputStyle
    onChange={onChange}
    backgroundColor={backgroundColor}
    isBlock={isBlock}
    placeholder={placeholder}
  >
    {text}
  </InputStyle>
);

export default GenericInput;
