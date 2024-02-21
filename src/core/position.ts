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
      const { mesh, light } = el._norska;
      if (mesh) mesh.position.set(...args);
      if (light) light.position.set(...args);
    });
  };

  el.addEventListener('norska:load:end', changePosition);

  effect(changePosition);
};

export default position;
