import React from 'react';
import { ButtonStyle } from './style';
import PropTypes from 'prop-types';

const GenericButton = ({ text, onClick, backgroundColor, isBlock }) => (
  <ButtonStyle
    onClick={onClick}
    backgroundColor={backgroundColor}
    isBlock={isBlock}
  >
    {text}
  </ButtonStyle>
);

export default GenericButton;

GenericButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  isBlock: PropTypes.bool,
};
