import AlpineInstance from "alpinejs";
import * as THREE from "three";
import {MeshNode} from "../types/Norska";

type Props = [string, number[], Record<string, any>]

export default (Alpine: typeof AlpineInstance) => {
  Alpine.directive('geometry', (el, {expression}, {evaluateLater, effect}) => {
    const getValues = evaluateLater(expression);

    (effect as any)(() => {
      const mesh = (el as MeshNode).mesh;
      if (!mesh.geometry.userData.updated) {
        getValues(([primitive, args, options]: Props) => {
          (el as any).mesh.geometry = new (THREE as any)[primitive](...args, options);
          mesh.geometry.userData.updated = true;
        });
      } else {
        getValues(([,, options]: Props) => {
          mesh.geometry = Object.assign(mesh.geometry, options);
        });
      }
    });
  });
}
