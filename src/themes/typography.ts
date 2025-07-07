import { fontSizes, sizes } from './theme.config'

export const Typography = (fontFamily: string[]) => ({
  fontFamily: fontFamily.join(','),
  htmlFontSize: fontSizes[2],
  fontSize: fontSizes[2],
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontWeight: 500,
    fontSize: fontSizes[7],
    lineHeight: sizes[6],
  },
  h2: {
    fontWeight: 500,
    fontSize: fontSizes[6],
    lineHeight: sizes[3],
  },
  h3: {
    fontWeight: 500,
    fontSize: fontSizes[5],
    lineHeight: sizes[3],
  },
  h4: {
    fontWeight: 500,
    fontSize: fontSizes[4],
    lineHeight: sizes[4],
  },
  h5: {
    fontWeight: 500,
    fontSize: fontSizes[2],
    lineHeight: sizes[3],
  },
  h6: {
    fontWeight: 400,
    fontSize: fontSizes[2],
    lineHeight: sizes[3],
  },
  caption: {
    fontWeight: 400,
    fontSize: fontSizes[1],
    lineHeight: sizes[3],
  },
  body1: {
    fontSize: fontSizes[2],
    lineHeight: sizes[4],
  },
  body2: {
    fontSize: fontSizes[2],
    lineHeight: sizes[3],
  },
  subtitle1: {
    fontSize: fontSizes[1],
    fontWeight: 600,
    lineHeight: sizes[3],
  },
  subtitle2: {
    fontSize: fontSizes[1],
    fontWeight: 500,
    lineHeight: sizes[3],
  },
  overline: {
    lineHeight: sizes[3],
  },
  button: {
    textTransform: 'capitalize',
  },
})
