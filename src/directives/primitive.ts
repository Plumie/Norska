import { NorskaDirective } from '@/types/Norska';
import { Object3D } from 'three';

const primitive: NorskaDirective = async (
  el,
  {expression},
  { evaluateLater, effect, cleanup },
) => {

  const { scene } = window._norska;

  const getValues = evaluateLater(expression);

  const hasParent = () => el.parentNode?._norska;

  const insertInstance = () => {
    getValues((object: Object3D) => {

      el._norska = object;

      if (hasParent()) {
        el.parentNode?._norska.add(el._norska);
        return;
      }

      scene.add(el._norska);
    });
  };

  const removeInstance = () => {
    if (hasParent()) {
      el.parentNode?._norska.remove(el._norska);
      return;
    }

    scene.remove(el._norska);
  };

  effect(() => insertInstance());
  cleanup(() => removeInstance());
};

export default primitive;
