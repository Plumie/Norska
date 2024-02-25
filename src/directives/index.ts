import canvas from './canvas';
import prop from './prop';
import attach from './attach';
import instance from './instance';
import three from './three';
import primitive from './primitive';
import event from './event';

const directives: Record<string, any> = {
  canvas,
  prop,
  attach,
  instance,
  three,
  primitive,
  event
};

export default directives;
