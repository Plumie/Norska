import { NorskaOptions } from '@/types/Norska';

type Props = [number, number, number];

export default (Alpine: Alpine, { prefix }: NorskaOptions) => {
  Alpine.directive(
    `${prefix}position`,
    (el, { expression }, { evaluateLater, effect }) => {
      const getValues = evaluateLater(expression);

      const changePosition = () => {
        getValues((args: Props) => {
          const { mesh, light } = el._norska;
          if (mesh) mesh.position.set(...args);
          if (light) light.position.set(...args);
        });
      };

      el.addEventListener('norska:load:end', changePosition);

      effect(changePosition);
    }
  );
};
