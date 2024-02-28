import { NorskaOptions } from '@/types/norska';
import { Loader, Loaders } from '@/types/loader';
import { Alpine } from 'alpinejs';
import directives from '@/directives';
import magics from '@/magics';

export default (norskaOptions?: NorskaOptions) => {

  return (Alpine: Alpine) => {

    const options = {
      prefix: '3',
      loaders: [],
      addons: [],
      ...norskaOptions
    };

    const getLoaders = (): Loaders => {
      const loaders: Loaders = {};
      options.loaders.forEach((loader: Loader) => {
        loaders[loader.name] = new loader();
      })
      return loaders;
    }

    const getAddonsNamespace = () => {
      return options.addons.map(addon => addon.namespace);
    }

    Alpine.directive(options.prefix, (el, args, routine) => {
      const name = args.modifiers[0];
      const addonsNames = getAddonsNamespace();

      if (!(addonsNames.includes(name))) {
        if (name.charAt(0) === "$") {
          args.modifiers[0] = name.slice(1);
          directives.property(el, args, routine);
          return;
        }
        if (directives[name]) {
          directives[name](el, args, routine);
          return;
        }
        directives.instance(el, args, routine);
        return;
      }

      options.addons.forEach((addon) => {
        if (args.modifiers[0] === addon.namespace) {
          const name = args.modifiers[1];
          if (addon.directives) {
            if (addon.directives[name]) {
              addon.directives[name](el, args, routine);
            }
          }
        }
      });
    });

    Object.keys(magics).forEach((name) => {
      if (name === 'loaders') {
        magics[name](Alpine, getLoaders());
        return;
      }
      magics[name](Alpine);
    });

    options.addons.forEach((addon) => {
      if (!addon.magics) return;
      Object.keys(addon.magics).forEach((name) => {
        addon.magics![name](Alpine);
      });
    });
  };
};
