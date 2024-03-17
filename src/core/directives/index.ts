import { NorskaDirectiveCallback } from '@/types/norska';
import canvas from './canvas';
import property from './property';
import attach from './attach';
import instance from './instance';
import three from './three';
import primitive from './primitive';

const directives: Record<string, NorskaDirectiveCallback> = {
  canvas,
  property,
  attach,
  instance,
  three,
  primitive,
};

export default directives;
