import { NorskaDirective } from '@/types/Norska';

// Drilling down current object and changing the property
const p: NorskaDirective = (
	el,
  { modifiers, expression },
  { evaluateLater, effect },
) => {

  const getValues = evaluateLater(expression);
  
  const changeProperty = () => {
    getValues((value: any) => {
      const instance = el._norska;

      if (!instance) return;

      let instanceCopy = instance;
      const last = modifiers[modifiers.length - 1];

      modifiers.forEach((modifier: string,) => {
        if (instanceCopy[modifier] === undefined) throw new Error(`Property ${modifiers.join('.')} does not exist`);
        if (modifier === last) return;
        instanceCopy = instanceCopy[modifier];
      });

      if (instanceCopy[last]?.set) {
        if (Array.isArray(value)) {
          instanceCopy[last].set(...value);
          return;
        }
        instanceCopy[last].set(value);
        return; 
      }
      instanceCopy[last] = value;
    });
  }

  effect(() => {
    changeProperty();
  });
};

export default p;
