import React from 'react';
import { InputStyle } from './style';
import PropTypes from 'prop-types';

const GenericInput = ({
  placeholder,
  onChange,
  backgroundColor,
  isBlock,
  type,
  name,
}) => (
  <InputStyle
    onChange={onChange}
    backgroundColor={backgroundColor}
    isBlock={isBlock}
    placeholder={placeholder}
    name={name}
    type={type}
  />
);

export default GenericInput;

GenericInput.propTypes = {
  // text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  isBlock: PropTypes.bool,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};
