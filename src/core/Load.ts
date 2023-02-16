import { NorskaOptions } from '@/types/Norska';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default (Alpine: Alpine, { prefix }: NorskaOptions) => {
  Alpine.directive(
    `${prefix}load`,
    (el, { expression }, { evaluateLater }) => {
      const getValues = evaluateLater(expression);

      if (!el.hasOwnProperty('_norska')) {
        el._norska = {};
      }

      getValues(([file]: string) => {
        const loader = new GLTFLoader();
        loader.load(file, (gltf) => {
          el._norska.mesh = gltf.scene.children[0];
          window.Norska.scene.add(el._norska.mesh);

          el.dispatchEvent(new CustomEvent('norska:load:end'));
        });
      });
    }
  );
};
