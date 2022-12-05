import * as THREE from "three";
import AlpineInstance from "alpinejs";

type Props = [string, number[], Record<string, any>]

const Geometry = (Alpine: typeof AlpineInstance) => {
  Alpine.directive('geometry', (el, {expression}, {evaluateLater, effect}) => {
    const getValues = evaluateLater(expression);

    (effect as any)(() => {
      getValues(([primitive, args, options]: Props) => {
        (el as any).mesh.geometry = new (THREE as Record<string, any>)[`${primitive}Geometry`](...args, options);
      });
    });
  });
}

export default Geometry;
