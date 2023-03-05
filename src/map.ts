import { canvas, camera, scene, load, controls } from '@/core';
import { position, rotation, scale } from '@/utils';
import { mesh, material, geometry, light } from '@/primitives';
import { frame, n, three } from '@/magic';

const THREE_DIRECTIVES: Record<string, any> = {
  mesh,
  geometry,
  material,
  light
};

const NORSKA_DIRECTIVES: Record<string, any> = {
  canvas,
  camera,
  load,
  scene,
  position,
  rotation,
  scale,
  ...controls,
};

const NORSKA_MAGICS: Record<string, any> = {
  frame,
  n,
  three
};

export {
  THREE_DIRECTIVES,
  NORSKA_DIRECTIVES,
  NORSKA_MAGICS,
};
