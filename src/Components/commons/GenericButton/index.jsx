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
  lightText,
  fontWeight,
}) => (
  <ButtonStyle
    onClick={onClick}
    backgroundColor={backgroundColor}
    isBlock={isBlock}
    type={type}
    margin={margin}
    lightText={lightText}
    fontWeight={fontWeight}
  >
    {text}
  </ButtonStyle>
);

export default GenericButton;

GenericButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  lightText: PropTypes.bool,
  isBlock: PropTypes.bool,
  margin: PropTypes.bool,
  fontWeight: PropTypes.bool,
  type: PropTypes.string.isRequired,
};
