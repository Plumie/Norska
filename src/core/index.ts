import camera from './camera';
import canvas from './canvas';
import scene from './scene';
import load from './load';
import controls from './controls';
import position from './position';
import rotation from './rotation';
import scale from './scale';

const core = {
  camera,
  canvas,
  scene,
  load,
  position,
  rotation,
  scale,
  ...controls,
};

export default core;
