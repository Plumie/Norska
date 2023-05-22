import { NorskaOptions } from '@/types/Norska';
import { Alpine } from '@/types/Alpine';
import { directives, magicProperties } from '@/map';
import * as THREE from 'three';

const lowerCaseTHREE: Record<string, any> = Object.fromEntries(
  Object.entries(THREE).map(([k, v]) => [k.toLowerCase(), v])
);

export default (o?: NorskaOptions) => {
  return (Alpine: any) => {

    const options = {
      prefix: '3',
      ...o
    };

    (Alpine as Alpine).directive(options.prefix, (el, args, routine) => {
      const values = args.expression ? routine.evaluate(args.expression) : [];
      try {
        if (args.modifiers[0] in directives.core) {
          directives.core[args.modifiers[0]](el, args, routine);
          return;
        }

        const i = (() => {
          if (Array.isArray(values)) return new (lowerCaseTHREE as any)[args.modifiers[0]](...values);
          return new lowerCaseTHREE[args.modifiers[0]]({ ...values });
        })();

        const instanceType = () => {
          if (i instanceof THREE.Mesh) return 'mesh';
          if (i instanceof THREE.Light) return 'light';
          if (i instanceof THREE.BufferGeometry) return 'geometry';
          if (i instanceof THREE.Material) return 'material';
          throw new Error(`Unknown instance type: ${i}`);
        };

        directives.primitives[instanceType()](el, args, routine, i);
      } catch (e) {
        console.error(e);
      }
    });

    Object.keys(magicProperties).forEach((name) => {
      magicProperties[name](Alpine);
    });
  };
};
