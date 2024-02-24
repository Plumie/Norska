import { NorskaDirective } from '@/types/Norska';
import { Object3D } from 'three';

const primitive: NorskaDirective = (
  el,
  {expression},
  { evaluateLater, effect, cleanup },
) => {

  const { scene } = window._norska;

  const getValues = evaluateLater(expression);

  const hasParent = () => el.parentNode?._norska;

  const insertObject = (object: Object3D) => {

    el._norska = object;

    if (hasParent()) {
      el.parentNode?._norska.add(el._norska);
      return;
    }

    scene.add(el._norska);
  };

  const removeObject = () => {
    if (hasParent()) {
      el.parentNode?._norska.remove(el._norska);
      return;
    }

    scene.remove(el._norska);
  };

  effect(() => {
    getValues((object: any) => {
      insertObject(object);
    }); 
  });

  cleanup(() => {
    removeObject()
  });
};

export default primitive;
