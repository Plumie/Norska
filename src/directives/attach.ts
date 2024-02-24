import { NorskaDirective } from '@/types/Norska';

const attach: NorskaDirective = (
	el,
  { modifiers },
  { effect },
) => {

  effect(() => {

    const i = el._norska;
    const parentInstance = el.parentNode?._norska || window._norska;

    if (!i || !parentInstance) return;

    modifiers.shift();

    const last = modifiers[modifiers.length - 1];

    let j = parentInstance;

    modifiers.forEach((modifier: string,) => {
      if (j[modifier] === undefined) {
        throw new Error(`Property ${modifiers.join('.')} does not exist`);
      }

      if (modifier === last) return;
      j = j[modifier];
    });

    if (j[last]?.set) {
      j[last].copy(i);
      return; 
    }

    j[last] = i;
  });
};

export default attach;
