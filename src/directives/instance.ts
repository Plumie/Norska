import * as THREE from 'three';

import { NorskaDirective } from '@/types/Norska';

// Capital letters cannot be used in an html attribute
const lowercaseThreeNamespace: Record<string, any> = Object.fromEntries(
  Object.entries(THREE).map(([k, v]) => [k.toLowerCase(), v])
);

const instance: NorskaDirective = (
  el,
  {expression, modifiers },
  { Alpine, effect, cleanup, evaluate},
) => {

  const { scene } = window._norska;

  const hasParent = () => el.parentNode?._norska;

  const createInstance = () => {

    const values = expression ? evaluate(expression) : [];

    const getInstance = () => {
      if (Array.isArray(values)) {
        return new (lowercaseThreeNamespace as Record<string, any>)[modifiers[0]](...values);
      }
      if (values != null && values.constructor.name === "Object") {
        return new lowercaseThreeNamespace[modifiers[0]]({ ...values as Object });
      }
      return new lowercaseThreeNamespace[modifiers[0]](values);
    }

    const instance = getInstance();

    el._norska = instance;

    el._norska.el = el;

    if (!instance.isObject3D) return;

    if (hasParent()) {
      el.parentNode?._norska.add(instance);
      return;
    }

    scene.add(instance);
  }

  const removeInstance = () => {

    const instance = el._norska;

    if (!instance || !instance.isObject3D) return;

    if (hasParent()) {
      instance.parent.remove(el._norska);
      return;
    }
    scene.remove(instance);

  };

  effect(() => {
    createInstance()
  });

  cleanup(() => removeInstance());
};

export default instance;
