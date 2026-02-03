const EnFontFamily = {
  SpaceGroteskBold: 'SpaceGrotesk-Bold',
  SpaceGroteskMedium: 'SpaceGrotesk-Medium',
  SpaceGroteskRegular: 'SpaceGrotesk-Regular',
  SpaceGroteskSemibold: 'SpaceGrotesk-Semibold',
};

const MmFontFamily = {
  PyidaungsuBold: 'Pyidaungsu-Bold',
  Pyidaungsu: 'Pyidaungsu',
};

export const fonts = {
  "Pyidaungsu": require("./pyidaungsu/Pyidaungsu.ttf"),
  "Pyidaungsu-Bold": require("./pyidaungsu/Pyidaungsu-Bold.ttf"),
  "SpaceGrotesk-Regular": require("./spaceGrotesk/SpaceGrotesk-Regular.ttf"),
  "SpaceGrotesk-Bold": require("./spaceGrotesk/SpaceGrotesk-Bold.ttf"),
  "SpaceGrotesk-Medium": require("./spaceGrotesk/SpaceGrotesk-Medium.ttf"),
  "SpaceGrotesk-SemiBold": require("./spaceGrotesk/SpaceGrotesk-SemiBold.ttf"),
};

export { EnFontFamily, MmFontFamily };
