import { Mesh } from 'three';

const mesh: AlpineDirective = (el, {}, { cleanup }) => {
  const { scene } = window.Norska;

  const createMesh = () => {
    el._norska.mesh = new Mesh();
    if (el.parentNode._norska && el.parentNode._norska.mesh) {
      el.parentNode._norska.mesh.add(el._norska.mesh);
    } else {
      scene.add(el._norska.mesh);
    }
  };

  const removeMesh = () => {
    if (el._norska.mesh.parent) {
      el._norska.mesh.parent.remove(el._norska.mesh);
    } else {
      scene.remove(el._norska.mesh);
    }
  };

  if (!el.hasOwnProperty('_norska')) {
    el._norska = {};
  }

  createMesh();

  cleanup(() => removeMesh());
};

export default mesh;
