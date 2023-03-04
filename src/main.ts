import { Camera, Canvas, Load, Scene } from '@/core';
import { Controls } from '@/controls';
import { Geometry } from '@/geometries';
import { Material } from '@/materials';
import { Light } from '@/lights';
import { Mesh } from '@/meshes';
import { Position, Rotation, Scale } from '@/utils';
import { Frame, N, Three } from '@/magic';

const directives: Record<string, any> = {
  camera: Camera,
  canvas: Canvas,
  load: Load,
  controls: Controls,
  scene: Scene,
  geometry: Geometry,
  material: Material,
  light: Light,
  mesh: Mesh,
  position: Position,
  rotation: Rotation,
  scale: Scale
};

const magics: Record<string, any> = {
  frame: Frame,
  n: N,
  Three: Three
};

export default (o: Record<string, any>) => {
  return (Alpine: any) => {
    const options = {
      prefix: '3',
      ...o
    };

    (Alpine as Alpine).directive(
      options.prefix,
      (el: any, args: any, routine: any) => {
        directives[args.modifiers[0]](el, args, routine);
      }
    );

    Object.keys(magics).forEach((name) => {
      magics[name](Alpine, options);
    });
  };
};
