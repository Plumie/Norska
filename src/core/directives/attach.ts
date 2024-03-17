import {  Instance, NorskaDirectiveCallback } from '@/types/norska';
import { getInstance, getParentInstance } from '@/utils/instance';
import { getDeepProperty, getPath } from '@/utils/property';

const attach: NorskaDirectiveCallback = (
	el,
  { modifiers },
  { effect, cleanup },
) => {
  const attachToParent = (parentProperty: Instance, key: string, instance: Instance) => {
    if (parentProperty[key]?.set) {
      parentProperty[key]?.copy!(instance);
      return; 
    }
    parentProperty[key] = instance;
  };

  const detachFromParent = (parentProperty: Instance, key: string) => {
    parentProperty[key] = null;
  }

  effect(() => {
    const instance = getInstance(el);
    const parentInstance = getParentInstance(el);
    if (!instance) throw new Error(`Attach: Instance not found for element ${el}`);
    if (!parentInstance) throw new Error(`Attach: Parent instance not found for element ${el}`);
    const path = getPath(modifiers.slice(1));
    const [parentProperty, key] = getDeepProperty(parentInstance, path);
    attachToParent(parentProperty, key, instance);
  });

  cleanup(() => {
    const parentInstance = getParentInstance(el);
    if (!parentInstance) return; 
    const path = getPath(modifiers.slice(1));
    const [parentProperty, key] = getDeepProperty(parentInstance, path);
    detachFromParent(parentProperty, key);
  });
};

export default attach;
