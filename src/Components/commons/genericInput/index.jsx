import React from 'react';
import { InputStyle } from './style';

const GenericInput = ({ placeholder, onChange, isBlock }) => (
  <InputStyle onChange={onChange} isBlock={isBlock} placeholder={placeholder} />
);

export default GenericInput;
