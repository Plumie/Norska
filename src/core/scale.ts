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
      const { mesh, light } = el._norska;
      if (mesh) mesh.scale.set(...args);
      if (light) light.scale.set(...args);
    });
  };

  el.addEventListener('norska:load:end', changeScale);

  effect(changeScale);
};

export default scale;
