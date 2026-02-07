import { Dimensions, PixelRatio } from "react-native";
const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

const guidelineBaseWidth = 375;
export const guidelineBaseHeight = 812;

export const scaleHeight = (val: number) => {
  return (screenHeight * val) / guidelineBaseHeight;
};

export const scale = (size: number) =>
  (screenWidth / guidelineBaseWidth) * size;
export const rpx = (size: number) =>
  PixelRatio.roundToNearestPixel(scale(size));
