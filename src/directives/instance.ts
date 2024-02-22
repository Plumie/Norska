import { NorskaDirective } from '@/types/Norska';

const instance: NorskaDirective = (
  el,
  {},
  { cleanup },
  instance
) => {

  const { scene } = window.Norska;

  const hasParent = () => el.parentNode?._norska;

  const createInstance = () => {

    el._norska = instance;

    if (!instance.isObject3D) return;

    if (hasParent()) {
      el.parentNode?._norska.add(el._norska);
      return;
    }
    scene.add(el._norska);
  };

  const removeInstance = () => {

    if (!instance.isObject3D) return;

    if (hasParent()) {
      el._norska?.parent.remove(el._norska);
      return;
    }
    scene.remove(el._norska);

  };

  createInstance();

  cleanup(() => removeInstance());
};

export default instance;
