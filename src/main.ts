import Geometry from './geometries/Geometry';
import Material from './materials/Material';
import Light from './lights/Light';
import Mesh from './meshes/Mesh';

import {Position, Scale, Rotation} from "./utils";

import {Camera, Canvas, Scene} from './core';
import {Three, Frame} from './magic';
import Controls from "./controls/Controls";

const e: Record<string, any> = {
  Geometry,
  Material,
  Mesh,
  Light,

  Position,
  Scale,
  Rotation,

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
