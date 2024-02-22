import camera from './camera';
import canvas from './canvas';
import scene from './scene';
import p from './p';
import attach from './attach';

import instance from './instance';

const directives: Record<string, any> = {
  core: {
    camera,
    canvas,
    scene,
    p,
    attach
  },
  instance
};

export default directives;
