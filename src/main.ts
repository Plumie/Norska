import * as THREE from 'three';
import { NORSKA_MAGICS, NORSKA_DIRECTIVES, THREE_DIRECTIVES } from '@/map';

const lowerCaseTHREE = Object.fromEntries(
  Object.entries(THREE).map(([k, v]) => [k.toLowerCase(), v])
);

export default (o: Record<string, any>) => {
  return (Alpine: any) => {
    const options = {
      prefix: '3',
      ...o
    };

    (Alpine as Alpine).directive(options.prefix, (el, args, routine) => {
      const values = args.expression ? routine.evaluate(args.expression) : [];
      try {
        if (args.modifiers[0] in NORSKA_DIRECTIVES) {
          NORSKA_DIRECTIVES[args.modifiers[0]](el, args, routine);
          return;
        }
        
        const i = (() => {
          if (Array.isArray(values)) return new (lowerCaseTHREE as any)[args.modifiers[0]](...values);
          return new (lowerCaseTHREE as any)[args.modifiers[0]]({...values});
        })();

        const type: any = () => {
          if (i instanceof THREE.Mesh) return 'mesh';
          if (i instanceof THREE.Light) return 'light';
          if (i instanceof THREE.BufferGeometry) return 'geometry';
          if (i instanceof THREE.Material) return 'material';
        };
        THREE_DIRECTIVES[type()](el, args, routine, i);
      } catch (e) {
        console.error(e);
      }
    });

    Object.keys(NORSKA_MAGICS).forEach((name) => {
      NORSKA_MAGICS[name](Alpine, options);
    });
  };
};
