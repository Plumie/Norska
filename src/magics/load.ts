import { Alpine } from 'alpinejs';

export default (Alpine: Alpine) => {
  Alpine.magic('load', () => async (loader: any, path: string) => {
    return await loader.loadAsync(path);
  });
};
