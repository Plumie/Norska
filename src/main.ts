import Geometry from '@/geometries/Geometry';
import Material from '@/materials/Material';
import Light from '@/lights/Light';
import Mesh from '@/meshes/Mesh';

import {Position, Scale, Rotation} from "@/utils";

import {Camera, Canvas, Scene, Load} from '@/core';
import {Three, Frame} from '@/magic';
import Controls from "@/controls/Controls";


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
  Load,

  Controls,

  Three,
  Frame
}

const norska = (o: Record<string, any>) => {
  return (Alpine: any) => {

    // Defining default optiosn

    const options = {
      prefix: '',
      ...o 
    }

    Object.keys(e).forEach((name) => {
      e[name](Alpine, options);
    });
  }
}

export default norska;
 