import React from 'react';
import { InputStyle } from './style';
import PropTypes from 'prop-types';

const GenericInput = ({ placeholder, onChange, isBlock, type, name }) => (
  <InputStyle
    onChange={onChange}
    isBlock={isBlock}
    placeholder={placeholder}
    name={name}
    type={type}
  />
);

export default GenericInput;

GenericInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  isBlock: PropTypes.bool,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
