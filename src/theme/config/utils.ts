import { PropertyValue, ScaleValue } from '@stitches/react';

const utils = {
  p: (value: ScaleValue<'space'>) => ({
    paddingTop: value,
    paddingBottom: value,
    paddingLeft: value,
    paddingRight: value,
  }),
  pt: (value: ScaleValue<'space'>) => ({
    paddingTop: value,
  }),
  pr: (value: ScaleValue<'space'>) => ({
    paddingRight: value,
  }),
  pb: (value: ScaleValue<'space'>) => ({
    paddingBottom: value,
  }),
  pl: (value: ScaleValue<'space'>) => ({
    paddingLeft: value,
  }),
  px: (value: ScaleValue<'space'>) => ({
    paddingLeft: value,
    paddingRight: value,
  }),
  py: (value: ScaleValue<'space'>) => ({
    paddingTop: value,
    paddingBottom: value,
  }),
  m: (value: ScaleValue<'space'>) => ({
    marginTop: value,
    marginBottom: value,
    marginLeft: value,
    marginRight: value,
  }),
  mt: (value: ScaleValue<'space'>) => ({
    marginTop: value,
  }),
  mr: (value: ScaleValue<'space'>) => ({
    marginRight: value,
  }),
  mb: (value: ScaleValue<'space'>) => ({
    marginBottom: value,
  }),
  ml: (value: ScaleValue<'space'>) => ({
    marginLeft: value,
  }),
  mx: (value: ScaleValue<'space'>) => ({
    marginLeft: value,
    marginRight: value,
  }),
  my: (value: ScaleValue<'space'>) => ({
    marginTop: value,
    marginBottom: value,
  }),
  w: (value: ScaleValue<'sizes'>) => ({
    width: value,
  }),
  h: (value: ScaleValue<'sizes'>) => ({
    height: value,
  }),
  boxSize: (value: ScaleValue<'sizes'>) => ({
    width: value,
    height: value,
  }),
  bg: (value: PropertyValue<'backgroundColor'>) => ({
    backgroundColor: value,
  }),
};

export default utils;
