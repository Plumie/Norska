import { NorskaOptions } from '@/types/Norska';

type Props = [number, number, number];

export default (Alpine: Alpine, { prefix }: NorskaOptions) => {
  Alpine.directive(
    `${prefix}rotation`,
    (el, { expression }, { evaluateLater, effect }) => {
      const getValues = evaluateLater(expression);

      const changeRotation = () => {
        getValues((args: Props) => {
          const { mesh, light } = el._norska;
          if (mesh) mesh.rotation.set(...args);
          if (light) light.rotation.set(...args);
        });
      };

      el.addEventListener('norska:load:end', changeRotation);

      effect(changeRotation);
    }
  );
};
