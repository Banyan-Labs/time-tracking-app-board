import React from 'react';
import { ButtonStyle } from './style';
import PropTypes from 'prop-types';

const GenericButton = ({
  margin,
  text,
  onClick,
  backgroundColor,
  isBlock,
  type,
}) => (
  <ButtonStyle
    onClick={onClick}
    backgroundColor={backgroundColor}
    isBlock={isBlock}
    type={type}
    margin={margin}
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
  margin: PropTypes.bool,
  type: PropTypes.string.isRequired,
};
