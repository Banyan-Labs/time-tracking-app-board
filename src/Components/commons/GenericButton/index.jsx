import React from 'react';
import { ButtonStyle } from './style';
import PropTypes from 'prop-types';

const GenericButton = ({ text, onClick, backgroundColor, isBlock, type }) => (
  <ButtonStyle
    onClick={onClick}
    backgroundColor={backgroundColor}
    isBlock={isBlock}
    type={type}
  >
    {text}
  </ButtonStyle>
);

export default GenericButton;

GenericButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  backgroundColor: PropTypes.string,
  isBlock: PropTypes.bool,
  type: PropTypes.string.isRequired,
};
