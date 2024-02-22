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
    });
  };

  el.addEventListener('norska:load:end', changeRotation);

  effect(changeRotation);
};

export default rotation;
