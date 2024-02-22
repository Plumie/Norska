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
    });
  };

  el.addEventListener('norska:load:end', changeScale);

  effect(changeScale);
};

export default scale;
