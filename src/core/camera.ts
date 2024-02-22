import { NorskaDirective } from '@/types/Norska';

const camera: NorskaDirective = (
	el,
) => {
  const { camera } = window.Norska;

  if (!el.hasOwnProperty('_norska')) {
    el._norska = {};
    return;
  }

  el._norska.i = camera;
};

export default camera;
