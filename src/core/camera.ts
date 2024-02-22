import { NorskaDirective } from '@/types/Norska';

const camera: NorskaDirective = (
	el,
) => {
  const { camera } = window.Norska;

  el._norska.i = camera;

  // Create norska's reference object if it doesn't exist
  if (!el.hasOwnProperty('_norska')) {
    el._norska = {};
  }
};

export default camera;
