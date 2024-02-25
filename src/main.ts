import { Alpine } from 'alpinejs';

import { NorskaOptions } from '@/types/Norska';
import directives from '@/directives';
import magics from '@/magics';

export default (norskaOptions?: NorskaOptions) => {

  return (Alpine: Alpine) => {

    const options = {
      prefix: '3',
      loaders: [],
      ...norskaOptions
    };

    Alpine.directive(options.prefix, (el, args, routine) => {
      const name = args.modifiers[0];
      if (name.charAt(0) === "$") {
        args.modifiers[0] = name.slice(1);
        directives.prop(el, args, routine);
        return;
      }
      if (directives[name]) {
        directives[name](el, args, routine);
        return;
      }
      directives.instance(el, args, routine);
    });

    // Register magic properties
    Object.keys(magics).forEach((name) => {
      if (name === 'loaders') {
        const loaders: Record<string, any> = {};
        options.loaders.forEach((loader: any) => {
          loaders[loader.name] = new loader();
        })
        magics[name](Alpine, loaders);
        return;
      }
      magics[name](Alpine);
    });
  };
};
