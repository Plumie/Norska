import { Instance, NorskaDirectiveCallback } from '@/types/norska';
import { getInstance } from '@/utils/instance';
import { isArray, isObject } from '@/utils/guards';
import { getDeepProperty, getPath } from '@/utils/property';

const props: NorskaDirectiveCallback = (
	el,
  { modifiers, expression },
  { evaluateLater, effect },
) => {
  const getValues = evaluateLater(expression.length ? expression : 'true');

  const changeProperty = (property: Instance, key: string, values: unknown) => {
    if (property[key]?.set) {
      if (isArray(values)) {
        property[key]?.set!(...values);
        return;
      }
      if (isObject(values)) {
        property[key]?.set!({ ...values });
        return;
      }
      property[key]?.set!(values);
      return;
    };
    property[key] = values;
  }

  effect(() => {
    getValues((values) => {
      const instance = getInstance(el);
      if (!instance) throw new Error(`Property: instance not found for element ${el}`);
      const path = getPath(modifiers);
      const [property, key] = getDeepProperty(instance, path);
      changeProperty(property, key, values);
    })
  });
};

export default props;
