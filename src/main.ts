import * as THREE from 'three';
import { Alpine } from 'alpinejs';

import { NorskaOptions } from '@/types/Norska';
import { directives, magicProperties } from '@/map';

// Capital letters cannot be used in an html attribute
const lowercaseThreeNamespace: Record<string, any> = Object.fromEntries(
  Object.entries(THREE).map(([k, v]) => [k.toLowerCase(), v])
);

export default (norskaOptions?: NorskaOptions) => {
  return (Alpine: Alpine) => {

    // Default options
    const options = {
      prefix: '3',
      ...norskaOptions
    };

    Alpine.directive(options.prefix, (el, args, routine) => {

      const values = args.expression ? routine.evaluate(args.expression) : [];

      try {
        if (args.modifiers[0] in directives.core) {
          directives.core[args.modifiers[0]](el, args, routine);
          return;
        }

        // Get the corresponding instance
        const i = (() => {
          if (Array.isArray(values)) {
            return new (lowercaseThreeNamespace as Record<string, any>)[args.modifiers[0]](...values);
          }
          return new lowercaseThreeNamespace[args.modifiers[0]]({ ...values as Object });
        })();

        // Get the instance type and call the corresponding directive
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

    // Register magic properties
    Object.keys(magicProperties).forEach((name) => {
      magicProperties[name](Alpine);
    });
  };
};
