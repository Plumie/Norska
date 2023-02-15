import { NorskaElement, NorskaOptions } from '@/types/Norska';

type Props = [number, number, number];

export default (Alpine: Alpine, { prefix }: NorskaOptions) => {
  Alpine.directive(
    `${prefix}position`,
    (el, { expression }, { evaluateLater, effect }) => {
      const getValues = evaluateLater(expression);

      (effect as any)(() => {
        const { mesh, light } = (el as NorskaElement)._norska;
        getValues((args: Props) => {
          if (mesh) mesh.position.set(...args);
          if (light) light.position.set(...args);
        });
      });
    }
  );
};
