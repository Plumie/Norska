import { Mesh } from 'three';
import { NorskaElement, NorskaOptions } from '@/types/Norska';

export default (Alpine: Alpine, { prefix }: NorskaOptions) => {
  Alpine.directive(`${prefix}mesh`, (el, {}, { cleanup }) => {
    const { scene } = window.Norska;

    const createMesh = () => {
      el._norska.mesh = new Mesh();
      scene.add((el as NorskaElement)._norska.mesh);
    };

    const removeMesh = () => {
      scene.remove((el as NorskaElement)._norska.mesh);
    };

    // On load

    if (!el.hasOwnProperty('_norska')) {
      el._norska = {};
    }

    createMesh();

    // Cleanup routine

    cleanup(() => removeMesh());
  });
};
