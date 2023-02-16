import { NorskaOptions } from '@/types/Norska';

type Props = [number, number, number];

export default (Alpine: Alpine, { prefix }: NorskaOptions) => {
  Alpine.directive(
    `${prefix}scale`,
    (el, { expression }, { evaluateLater, effect }) => {
      const getValues = evaluateLater(expression);

      const changeScale = () => {
        getValues((args: Props) => {
          const { mesh, light } = el._norska;
          if (mesh) mesh.scale.set(...args);
          if (light) light.scale.set(...args);
        });
      };

      el.addEventListener('norska:load:end', changeScale);

      effect(changeScale);
    }
  );
};
