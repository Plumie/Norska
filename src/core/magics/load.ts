import { Alpine } from 'alpinejs';
import { Object3D } from 'three';

export default (Alpine: Alpine) => {
  Alpine.magic('load', () => async (loader: any, path: string) => {
    const loaded = new Promise((resolve) => {
      loader.load(path, (gltf: Object3D) => {
        resolve(gltf);
      });
    });
    return loaded;
  });
};
