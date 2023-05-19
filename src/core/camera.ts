import { Euler, Vector3 } from 'three';
import { AlpineDirective } from '@/types/Alpine';

interface Props {
  position: Vector3;
  rotation: Euler;
  lookAt: Vector3;
}

const Camera: AlpineDirective = (
	_,
  { expression },
  { evaluateLater, effect }
) => {
  const { camera } = window.Norska;
  const getValues = evaluateLater(expression);

  effect(() => {
    getValues(({position, rotation, lookAt}: Props) => {
			if (position && Array.isArray(position)) camera.position.set(position[0], position[1], position[2]);
			if (rotation && Array.isArray(rotation)) camera.rotation.set(rotation[0], rotation[1], rotation[2]);
			if (lookAt && Array.isArray(lookAt)) camera.lookAt(lookAt);
    });
  });
};

export default Camera;
