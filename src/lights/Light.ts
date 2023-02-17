import lights from './index';
import { NorskaOptions } from '@/types/Norska';

type Props = [string, any[], Record<string, any>];

export default (Alpine: Alpine, { prefix }: NorskaOptions) => {
  Alpine.directive(
    `${prefix}light`,
    (el, { expression }, { evaluateLater, effect }) => {
      const getValues = evaluateLater(expression);
      const { scene } = window.Norska;

      effect(() => {
        const light = el._norska.light;
        if (light) {
          getValues(([, , options]: Props) => {
            Object.assign(light, options);
          });
        } else {
          getValues(([name, args, options]: Props) => {
            el._norska.light = new lights[name](args);
            Object.assign(el._norska.light, options);
            scene.add(el._norska.light);
          });
        }
      });
    }
  );
};
