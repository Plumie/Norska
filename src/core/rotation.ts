import { NorskaDirective } from "@/types/Norska";

type Props = [number, number, number];

const rotation: NorskaDirective = (
  el,
  { expression },
  { evaluateLater, effect }
) => {
  const getValues = evaluateLater(expression);

  const changeRotation = () => {
    getValues((args: Props) => {
      el._norska.i.rotation.set(...args);

      // Error handling
      if (args.some((arg) => typeof arg !== 'number')) {
        throw new Error(`Rotation should be a array of numbers. Got ${JSON.stringify(args)} instead.`);
      }
    });
  };

  el.addEventListener('norska:load:end', changeRotation);

  effect(changeRotation);
};

export default rotation;
