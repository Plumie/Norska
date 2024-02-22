import { NorskaDirective } from '@/types/Norska';
import { Mesh, Object3D } from 'three';

const mesh: NorskaDirective = (el, {}, { cleanup }) => {
  const { scene } = window.Norska;

  const hasParent = () => el.parentNode?._norska && el.parentNode?._norska.i instanceof Mesh;

  const createMesh = () => {
    el._norska.i = new Mesh();

    if (hasParent()) {
      el.parentNode?._norska.i.add(el._norska.i);
      return;
    }

    scene.add(el._norska.i);
  };

  const removeMesh = () => {

    // Check if the mesh has a parent and remove it from it
    if (hasParent()) {
      el._norska.i?.parent.remove(el._norska.i);
      return;
    }
    scene.remove(el._norska.i as Object3D);
  };

  // Create norska's reference object if it doesn't exist
  if (!el.hasOwnProperty('_norska')) {
    el._norska = {};
  }

  createMesh();

  cleanup(() => removeMesh());
};

export default mesh;
