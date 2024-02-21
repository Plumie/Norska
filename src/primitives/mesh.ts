import { NorskaDirective } from '@/types/Norska';
import { Mesh, Object3D } from 'three';

const mesh: NorskaDirective = (el, {}, { cleanup }) => {
  const { scene } = window.Norska;

  const createMesh = () => {
    el._norska.mesh = new Mesh();
    // Check if the parent has a mesh and add it to it
    if (el.parentNode?._norska && el.parentNode?._norska.mesh) {
      el.parentNode?._norska.mesh.add(el._norska.mesh);
      return;
    }
    scene.add(el._norska.mesh);
  };

  const removeMesh = () => {
    // Check if the mesh has a parent and remove it from it
    if (el._norska.mesh.parent) {
      el._norska.mesh?.parent.remove(el._norska.mesh);
      return;
    }
    scene.remove(el._norska.mesh as Object3D);
  };

  // Create norska's reference object if it doesn't exist
  if (!el.hasOwnProperty('_norska')) {
    el._norska = {};
  }

  createMesh();

  cleanup(() => removeMesh());
};

export default mesh;
