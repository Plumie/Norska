import { Vector3 } from 'three';

import { NorskaOptions } from '@/types/Norska';

interface Props {
  position: Vector3;
  rotation: Vector3;
  lookAt: Vector3;
}

export default (Alpine: Alpine, { prefix }: NorskaOptions) => {
  Alpine.directive(
    `${prefix}camera`,
    (el, { expression }, { evaluateLater, effect }) => {
      const { camera } = window.Norska;
      const getValues = evaluateLater(expression);

      (effect as any)(() => {
        getValues((params: Props) => {
          params.position && camera.position.set(...(params.position as any));
          params.rotation && camera.rotation.set(...(params.rotation as any));
          params.lookAt && camera.lookAt(...(params.lookAt as any));
        });
      });
    }
  );
};
