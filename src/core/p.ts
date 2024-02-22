import { NorskaDirective } from '@/types/Norska';

const p: NorskaDirective = (
	el,
  { modifiers, expression },
  { evaluateLater, effect },
) => {
  const getValues = evaluateLater(expression);

  effect(() => {
    const {i} = el._norska;

    if (!i) return;

    getValues((args: any) => {
      i[modifiers[1]] = args;
    });
  });
};

export default p;
