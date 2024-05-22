import React from 'react';
import { PixelRatio } from 'react-native';

const pixelDensity = PixelRatio.get();
const pixelTopercent = (pixelSize) => {
  const percentage = (pixelSize / pixelDensity) * 100;
  return percentage;
};

export { pixelTopercent };