const colors = {
  accent: "#F3534A",
  primary: "#0AC4BA",
  secondary: "#2BDA8E",
  tertiary: "#FFE358",
  black: "#323643",
  white: "#FFFFFF",
  gray: "#9DA3B4",
  blue: "#2E5BFF",
  lightblue: "rgba(46,92,255,0.2)",
  green: "#33AC2E",
  red: "#D63649",
  yellow: "#F7C137",
  teal: "#00C1D4",
  purple: "#8C54FF",
  caption: "#B0BAC9",
  input: "rgba(224, 231, 255, 0.20)", // '#E0E7FF' 20%
  border: "#D6DDF6",
  card: "rgba(46,91,255,0.08)",
  shadow: "rgba(46,91,255,0.07)",
};

const sizes = {
  // global sizes
  base: 16,
  font: 14,
  radius: 6,
  padding: 25,

  // font sizes
  h1: 26,
  h2: 20,
  h3: 18,
  title: 18,
  header: 16,
  body: 14,
  caption: 12,
};

const fonts = {
  h1: {
    fontFamily: "Rubik-Light",
    fontSize: sizes.h1,
    color: colors.black,
    letterSpacing: -0.6,
    lineHeight: 57,
  },
  h2: {
    fontFamily: "Rubik-Light",
    fontSize: sizes.h2,
    color: colors.black,
    letterSpacing: 0,
    lineHeight: 32,
  },
  h3: {
    fontFamily: "Rubik-Light",
    fontSize: sizes.h3,
    color: colors.black,
    letterSpacing: 0,
    lineHeight: 32,
  },
  h4: {
    fontFamily: "Rubik-Medium",
    fontSize: sizes.h4,
    color: colors.black,
    letterSpacing: 0,
    lineHeight: 18,
  },
  paragraph: {
    fontFamily: "Rubik-Regular",
    fontSize: sizes.paragraph,
    color: colors.black,
    letterSpacing: 0,
    lineHeight: 22,
  },
  paragraphGray: {
    fontFamily: "Rubik-Regular",
    fontSize: sizes.paragraph,
    color: colors.gray,
    letterSpacing: 0,
    lineHeight: 22,
  },
  caption: {
    fontFamily: "Rubik-Regular",
    fontSize: sizes.caption,
    color: colors.black3,
    letterSpacing: 1.12,
    lineHeight: 15,
  },
  captionMedium: {
    fontFamily: "Rubik-Medium",
    fontSize: sizes.captionMedium,
    color: colors.black3,
    letterSpacing: 1.12,
    lineHeight: 14,
  },
  button: {
    fontFamily: "Rubik-Medium",
    fontSize: sizes.font,
    color: colors.white,
    letterSpacing: 0,
    lineHeight: 21,
  },
};

export { colors, sizes, fonts };
