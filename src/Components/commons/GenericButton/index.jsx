import React from 'react';
import { ButtonStyle, Span } from './style';
import PropTypes from 'prop-types';
import { Icons } from '../../../styles/Icons';

const GenericButton = ({
  margin,
  text,
  onClick,
  backgroundColor,
  isBlock,
  type,
  lightText,
  fontWeight,
  IconG,
  IconF,
  IconL,
  IconGH,
  fontSize,
  padding,
}) => {
  const googleIcons = <Span>{Icons.google}</Span>;

  const facebookIcons = <Span>{Icons.facebook}</Span>;

  const linkedinIcons = <Span>{Icons.linkedin}</Span>;

  const githubIcons = <Span>{Icons.github}</Span>;

  return (
    <ButtonStyle
      onClick={onClick}
      backgroundColor={backgroundColor}
      isBlock={isBlock}
      type={type}
      margin={margin}
      lightText={lightText}
      fontWeight={fontWeight}
      fontSize={fontSize}
      padding={padding}
    >
      {IconG && googleIcons}
      {IconF && facebookIcons}
      {IconL && linkedinIcons}
      {IconGH && githubIcons}
      {text}
    </ButtonStyle>
  );
};

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
  IconG: PropTypes.bool,
  IconF: PropTypes.bool,
  IconL: PropTypes.bool,
  IconGH: PropTypes.bool,
  fontSize: PropTypes.string,
  padding: PropTypes.string,
};
