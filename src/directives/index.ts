import canvas from './canvas';
import prop from './prop';
import attach from './attach';
import instance from './instance';
import three from './three';
import primitive from './primitive';

const directives: Record<string, any> = {
  canvas,
  prop,
  attach,
  instance,
  three,
  primitive,
};

export default directives;
