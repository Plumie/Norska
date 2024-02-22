import { NorskaDirective } from '@/types/Norska';

const Scene: NorskaDirective = (
  el,
) => {
  const { scene } = window.Norska;

  if (!el.hasOwnProperty('_norska')) {
    el._norska = {};
    return;
  }

  el._norska.i = scene;
};

export default Scene;
