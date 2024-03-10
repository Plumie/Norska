import { Instance, NorskaDirectiveCallback } from '@/types/norska';
import { attachInstance, detachInstance, getInstance, addInstance, removeInstance } from '@/utils/instance';
import { isObject3D } from '@/utils/guards';
import { Object3D } from 'three';

const primitive: NorskaDirectiveCallback = (
  el,
  {expression},
  { evaluateLater, effect, cleanup },
) => {
  const getValues = evaluateLater<Instance<Object3D>>(expression.length ? expression : 'false');

  effect(() => {
    getValues((values) => {
      if (!isObject3D(values)) throw new Error(`Primitive: expected an instance of Object3D, got ${(values as any)?.type ?? values} instead.`);
      attachInstance(el, values);
      addInstance(el, values)
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

export default primitive;
