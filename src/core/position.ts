import { NorskaDirective } from "@/types/Norska";

type Props = [number, number, number];

const position: NorskaDirective = (
  el,
  { expression },
  { evaluateLater, effect }
) => {
  const getValues = evaluateLater(expression);

  const changePosition = () => {
    getValues((args: Props) => {
      el._norska.i.position.set(...args);

      // Error handling
      if (args.some((arg) => typeof arg !== 'number')) {
        throw new Error(`Position should be a array of numbers. Got ${JSON.stringify(args)} instead.`);
      }
    });
  };

  el.addEventListener('norska:load:end', changePosition);

  effect(changePosition);
};

export default position;
