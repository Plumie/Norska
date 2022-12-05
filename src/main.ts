import {Geometry, Material, Mesh} from './objects';
import {Camera, Canvas, Scene} from './core';

const directives: Record<string, any> = {
  Geometry,
  Material,
  Mesh,

  Camera,
  Canvas,
  Scene,
}

export default function (Alpine: any) {
  Object.keys(directives).forEach((name) => {
    directives[name](Alpine);
  });
}
