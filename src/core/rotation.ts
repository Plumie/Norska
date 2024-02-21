import { AlpineDirective } from "@/types/Alpine";

type Props = [number, number, number];

const rotation: AlpineDirective = (
  el,
  { expression },
  { evaluateLater, effect }
) => {
  const getValues = evaluateLater(expression);

  const changeRotation = () => {
    getValues((args: Props) => {
      const { mesh, light } = el._norska;
      if (mesh) mesh.rotation.set(...args);
      if (light) light.rotation.set(...args);
    });
  };

  el.addEventListener('norska:load:end', changeRotation);

  effect(changeRotation);
};

export default rotation;
