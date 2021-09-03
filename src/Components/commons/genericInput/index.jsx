import React from 'react';
import { InputStyle } from './style';

const GenericButton = ({
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

export default GenericButton;
