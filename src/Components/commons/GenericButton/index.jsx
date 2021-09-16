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
  Icon,
  logo,
}) => {
  let name = logo;
  console.log(Icon, logo);

  const RenderIcons = (
    <Span>
      {Icons.logo} {console.log(name, 'looking')}
    </Span>
  );

  return (
    <ButtonStyle
      onClick={onClick}
      backgroundColor={backgroundColor}
      isBlock={isBlock}
      type={type}
      margin={margin}
      lightText={lightText}
      fontWeight={fontWeight}
      logo={logo}
    >
      {RenderIcons}
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
  Icon: PropTypes.bool,
  logo: PropTypes.string,
};
