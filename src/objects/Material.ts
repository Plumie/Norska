import {NorskaElement} from "../types/Norska";
import AlpineInstance from "alpinejs";
import * as THREE from "three";

type Props = [string, Record<string, any>]

export default (Alpine: typeof AlpineInstance) => {
  Alpine.directive('material', (el, {expression}, {evaluateLater, effect}) => {
    const getValues = evaluateLater(expression);

    (effect as any)(() => {
      const mesh = (el as NorskaElement).__norska.mesh;
      if (mesh) {
        if (!mesh?.material.userData.updated) {
          getValues(([name, options]: Props) => {
            mesh.material = new (THREE as any)[name](options);
            mesh.material.userData.updated = true;
          });
        } else {
          getValues(([, options]: Props) => {
            mesh.material = Object.assign(mesh.material, options);
          });
        }
      }
    });
  });
}
