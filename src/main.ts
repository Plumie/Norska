import * as THREE from 'three';
import { Alpine } from 'alpinejs';

import { NorskaOptions } from '@/types/Norska';
import directives from '@/directives';
import magics from '@/magics';

// Capital letters cannot be used in an html attribute
const lowercaseThreeNamespace: Record<string, any> = Object.fromEntries(
  Object.entries(THREE).map(([k, v]) => [k.toLowerCase(), v])
);

export default (norskaOptions?: NorskaOptions) => {
  return (Alpine: Alpine) => {

    const options = {
      prefix: '3',
      ...norskaOptions
    };

    Alpine.directive(options.prefix, (el, args, routine) => {

      const values = args.expression ? routine.evaluate(args.expression) : [];

      try {

        // Check if directive is a core directive
        if (args.modifiers[0] in directives.core) {
          directives.core[args.modifiers[0]](el, args, routine);
          return;
        }

        // Check if first character is a $, if so it's a prop
        if (args.modifiers[0].charAt(0) === "$") {
          args.modifiers[0] = args.modifiers[0].slice(1);
          directives.core.p(el, args, routine);
          return;
        }

        // Else fallback to a three.js object instance
        const getInstance = (() => {

          if(lowercaseThreeNamespace[args.modifiers[0]] === undefined) {
            throw new Error(`The object ${args.modifiers[0]} does not exist in the three.js namespace`);
          }

          if (Array.isArray(values)) {
            return new (lowercaseThreeNamespace as Record<string, any>)[args.modifiers[0]](...values);
          }

          if (values != null && values.constructor.name === "Object") {
            return new lowercaseThreeNamespace[args.modifiers[0]]({ ...values as Object });
          }

          return new lowercaseThreeNamespace[args.modifiers[0]](values);
        });

        // Instanciate
        directives.instance(el, args, routine, getInstance());
      } catch (e) {
        console.error(e);
      }
    });

    // Register magic properties
    Object.keys(magics).forEach((name) => {
      magics[name](Alpine);
    });
  };
};
