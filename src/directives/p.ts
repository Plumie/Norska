import { NorskaDirective } from '@/types/Norska';

const p: NorskaDirective = (
	el,
  { modifiers, expression },
  { evaluateLater, effect },
) => {
  const getValues = evaluateLater(expression);

  effect(() => {
    const i = el._norska;

    if (!i) return;

    getValues((args: any) => {

      const last = modifiers[modifiers.length - 1];

      let j = i;
      modifiers.forEach((modifier: string,) => {
        if (j[modifier] === undefined) {
          throw new Error(`Property ${modifiers.join('.')} does not exist`);
        }

        if (modifier === last) return;

        j = j[modifier];
      });

      if (j[last]?.set) {

        if (Array.isArray(args)) {
          j[last].set(...args);
          return;
        }

        j[last].set(args);
        return; 
      }

      j[last] = args;
    });
  });
};

export default p;
