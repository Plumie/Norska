import {canvas, camera} from '@/core'
import {mesh, material, geometry} from '@/primitives'; 
import { Frame, N, Three } from '@/magic';
import * as THREE from 'three';

const lowerCaseTHREE = Object.fromEntries(
  Object.entries(THREE).map(([k, v]) => [k.toLowerCase(), v])
);

const THREE_DIRECTIVES: Record<string, any> = {
  mesh,
  geometry,
  material,
}

const NORSKA_DIRECTIVES = {
  canvas,
  camera
}

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
      (el, args, routine) => {
        const values = args.expression ? routine.evaluate(args.expression) : [];
console.log(values)
        try {
          const instance = new (lowerCaseTHREE as any)[args.modifiers[0]](...values); 
          const type: any = () => {
            if (instance instanceof THREE.Mesh) return 'mesh';
            if (instance instanceof THREE.Light) return 'light';
            if (instance instanceof THREE.BufferGeometry) return 'geometry';
            if (instance instanceof THREE.Material) return 'material';
          }
          THREE_DIRECTIVES[type()](el, args, routine, instance);
        } catch (e) {
          console.log(e)
        }
      }
    );

    (Alpine as Alpine).directive(
      'n',
      (el, args, routine) => {
        NORSKA_DIRECTIVES[args.modifiers[0]](el, args, routine);
      }
    )

    Object.keys(magics).forEach((name) => {
      magics[name](Alpine, options);
    });
  };
};
