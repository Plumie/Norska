import { Instance, NorskaDirectiveCallback } from '@/types/norska';
import * as THREE from 'three';
import { addInstance, attachInstance, detachInstance, getInstance, removeInstance } from '@/utils/instance';
import { isArray, isObject, isObject3D } from '@/utils/guards';

const lowercaseTHREE: Record<string, any> = Object.fromEntries(
  Object.entries(THREE).map(([k, v]) => [k.toLowerCase(), v])
);

const instance: NorskaDirectiveCallback = (
  el,
  { expression, modifiers },
  { effect, cleanup, evaluateLater },
) => {
  const getValues = evaluateLater(expression.length ? expression : 'false');

  const createInstance = (values: unknown): Instance => {
    const Class = lowercaseTHREE[modifiers[0]];
    if (!Class) throw new Error(`Instance: no constructor found for ${modifiers[0]}`);
    if (isArray(values)) return new Class(...values);
    if (isObject(values)) return new Class({ ...values as Object });
    if (values) return new Class(values);
    return new Class();
  }

  effect(() => {
    getValues((values) => {
      const instance = createInstance(values);
      if (isObject3D(instance)) {
        addInstance(el, instance);
      };
      attachInstance(el, instance);
    });
  });

  cleanup(() => {
    const instance = getInstance(el);
    if (isObject3D(instance)) {
      removeInstance(el, instance);
    }
    detachInstance(el);
  });
};

export default instance;
