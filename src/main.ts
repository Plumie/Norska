import {Geometry, Material, Mesh} from './objects';
import {Camera, Canvas, Scene} from './core';
import {Three} from './magic';

const e: Record<string, any> = {
  // Directives
  Geometry,
  Material,
  Mesh,

  Camera,
  Canvas,
  Scene,

  Three,
}

export default function (Alpine: any) {
  Object.keys(e).forEach((name) => {
    e[name](Alpine);
  });
}
