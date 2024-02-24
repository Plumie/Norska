import canvas from './canvas';
import p from './p';
import attach from './attach';
import instance from './instance';
import three from './three';
import primitive from './primitive';

const directives: Record<string, any> = {
  core: {
    canvas,
    p,
    attach,
    three,
    primitive,
  },
  instance
};

export default directives;
