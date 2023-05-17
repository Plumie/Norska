import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {AlpineDirective} from '@/types/Alpine';

const Load: AlpineDirective = (
  el,
  { expression },
  { evaluateLater, cleanup }
) => {
  const getValues = evaluateLater(expression);
  const { scene } = window.Norska;

  const createMesh = () => {
    getValues(([file]: string) => {
      const loader = new GLTFLoader();
      loader.load(file, (gltf) => {
        el._norska.mesh = gltf.scene.children[0];

        if (el.parentNode._norska && el.parentNode._norska.mesh) {
          el.parentNode._norska.mesh.add(el._norska.mesh);
        } else {
          scene.add(el._norska.mesh);
        }
        el.dispatchEvent(new CustomEvent('norska:load:end'));
      });
    });
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

export default Load;
