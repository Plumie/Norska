import { Vector3 } from 'three';
import { AlpineDirective } from '@/types/Alpine';

interface Props {
  position: Vector3;
  rotation: Vector3;
  lookAt: Vector3;
}

const Camera: AlpineDirective = (
  el,
  { expression },
  { evaluateLater, effect }
) => {
  const { camera } = window.Norska;
  const getValues = evaluateLater(expression);

  effect(() => {
    getValues((params: Props) => {
      params.position && camera.position.set(
        ...params.position.toArray()
      );
      params.rotation && camera.rotation.set(
        ...params.rotation.toArray()
      );
      params.lookAt && camera.lookAt(
        ...params.lookAt.toArray()
      );
    });
  });
};

export default Camera;
