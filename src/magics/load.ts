import { Alpine } from 'alpinejs';

export default (Alpine: Alpine, loaders: Record<string, unknown>) => {
  Alpine.magic('load', (el) => async (loader: any, path: string, callback: (arg0: any) => unknown) => {
    return new Promise((resolve, reject) => loader.load(path, resolve, undefined, reject))
      .then((data) => {
        return callback(data)
      });
  });
  Alpine.magic('loaders', () => loaders);
};
