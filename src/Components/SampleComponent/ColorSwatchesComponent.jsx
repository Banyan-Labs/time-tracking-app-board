import React, { useState } from 'react';
import {
  ColorBox,
  Details,
  Label,
  SelectedColorWrapper,
  SwatchesContainer,
  SwatchesWrapper,
} from './style';
import { v4 as uuid } from 'uuid';
import { colors, testColors } from '../../styles/Color';

const ColorSwatches = () => {
  const colorsArr = Object.entries(colors);
  const testColorsArr = Object.entries(testColors);
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <SwatchesContainer>
      <SelectedColorWrapper>
        <Label>
          Hex: <Details>{selectedColor}</Details>
        </Label>
      </SelectedColorWrapper>
      <Label>colors obj:</Label>
      <SwatchesWrapper>
        {colorsArr.map((color) => (
          <ColorBox
            key={uuid()}
            color={color[1]}
            label={color[0]}
            hex={color[1]}
            onClick={() => setSelectedColor(color[1])}
          />
        ))}
      </SwatchesWrapper>
      <Label>testColors obj:</Label>
      <SwatchesWrapper>
        {testColorsArr.map((color) => (
          <ColorBox
            key={uuid()}
            color={color[1]}
            label={color[0]}
            hex={color[1]}
            onClick={() => setSelectedColor(color[1])}
          />
        ))}
      </SwatchesWrapper>
    </SwatchesContainer>
  );
};

export default ColorSwatches;
