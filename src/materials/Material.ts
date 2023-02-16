import { NorskaElement, NorskaOptions } from '@/types/Norska';

import * as THREE from 'three';
import { MeshBasicMaterial } from 'three';

type Props = [string, Record<string, any>];

export default (Alpine: Alpine, { prefix }: NorskaOptions) => {
  Alpine.directive(
    `${prefix}material`,
    (el, { expression }, { evaluateLater, effect }) => {
      const getValues = evaluateLater(expression);

      effect(() => {
        const mesh = (el as NorskaElement)._norska.mesh;
        if (mesh) {
          if (!mesh?.material.userData.updated) {
            getValues(([name, options]: Props) => {
              mesh.material = new (THREE as any)[name](options);
              mesh.material.userData.updated = true;
            });
          } else {
            getValues(([, { color, ...rest }]: Props) => {
              if (color) (mesh.material as MeshBasicMaterial).color.set(color);
              Object.assign(mesh.material, rest);
            });
          }
        }
      });
    }
  );
};
