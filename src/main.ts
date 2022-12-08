import {Geometry, Material, Mesh} from './objects';
import {Camera, Canvas, Scene} from './core';
import {Three, Frame} from './magic';
import Controls from "./controls/Controls";

const e: Record<string, any> = {
  Geometry,
  Material,
  Mesh,

  Camera,
  Canvas,
  Scene,

  Controls,

  Three,
  Frame
}

export default function (Alpine: any) {
  Object.keys(e).forEach((name) => {
    e[name](Alpine);
  });
}
