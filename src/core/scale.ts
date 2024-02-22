import { NorskaDirective } from "@/types/Norska";

type Props = [number, number, number];

const scale: NorskaDirective = (
  el,
  { expression },
  { evaluateLater, effect }
) => {
  const getValues = evaluateLater(expression);

  const changeScale = () => {
    getValues((args: Props) => {
      el._norska.i.scale.set(...args);

      // Error handling
      if (args.some((arg) => typeof arg !== 'number')) {
        throw new Error(`Scale should be a array of numbers. Got ${JSON.stringify(args)} instead.`);
      }
    });
  };

  el.addEventListener('norska:load:end', changeScale);

  effect(changeScale);
};

export default scale;
