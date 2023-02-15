import { NorskaOptions } from '@/types/Norska';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default (Alpine: Alpine, { prefix }: NorskaOptions) => {
  Alpine.directive(
    `${prefix}load`,
    (el, { expression }, { evaluateLater, effect }) => {
      const getValues = evaluateLater(expression);

      (effect as any)(() => {
        getValues(([file]: any) => {
          const loader = new GLTFLoader();
          loader.load(file, (gltf) => {
            const mesh = gltf.scene.children[0];
            window.Norska.scene.add(mesh);
          });
        });
      });
    }
  );
};
