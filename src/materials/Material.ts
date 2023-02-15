import {NorskaElement, NorskaOptions} from "@/types/Norska";
import AlpineInstance from "alpinejs";
import * as THREE from "three";

type Props = [string, Record<string, any>]

export default (Alpine: typeof AlpineInstance, {prefix}: NorskaOptions) => {
  Alpine.directive(`${prefix}material`, (el, {expression}, {evaluateLater, effect}) => {
    const getValues = evaluateLater(expression);

    (effect as any)(() => {
      const mesh = (el as NorskaElement)._norska.mesh;
      if (mesh) {
        if (!mesh?.material.userData.updated) {
          getValues(([name, options]: Props) => {
            mesh.material = new (THREE as any)[name](options);
            mesh.material.userData.updated = true;
          });
        } else {
          getValues(([, options]: Props) => {
            Object.assign(mesh.material, options);
          });
        }
      }
    });
  });
}
