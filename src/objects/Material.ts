import Alpine from "alpinejs";
import * as THREE from "three";
import {MeshNode} from "../types/Norska";
import AlpineInstance from "alpinejs";

type Props = [string, Record<string, any>]

export default (Alpine: typeof AlpineInstance) => {
  Alpine.directive('material', (el, {expression}, {evaluateLater, effect}) => {
    const getValues = evaluateLater(expression);

    (effect as any)(() => {
      const mesh = (el as MeshNode).mesh;
      if (!mesh.material.userData.updated) {
        getValues(([name, options]: Props) => {
          mesh.material = new (THREE as Record<string, any>)[name](options);
          mesh.material.userData.updated = true;
        });
      } else {
        getValues(([, options]: Props) => {
          mesh.material.setValues(options);
        });
      }
    });
  });
}