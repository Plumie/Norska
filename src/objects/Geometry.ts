import AlpineInstance from "alpinejs";
import * as THREE from "three";

type Props = [string, number[], Record<string, any>]

export default (Alpine: typeof AlpineInstance) => {
  Alpine.directive('geometry', (el, {expression}, {evaluateLater, effect}) => {
    const getValues = evaluateLater(expression);

    (effect as any)(() => {
      getValues(([primitive, args, options]: Props) => {
        (el as any).mesh.geometry = new (THREE as any)[`${primitive}Geometry`](...args, options);
      });
    });
  });
}