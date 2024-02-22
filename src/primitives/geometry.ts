import { NorskaDirective } from "@/types/Norska";
import { Mesh } from "three";

type Props = [any[], Record<string, any>];

const geometry: NorskaDirective = (
  el,
  { expression },
  { evaluateLater, effect },
  instance
) => {
  const getValues = evaluateLater(expression);

  effect(() => {
    const {i} = el._norska;

    if (!(i instanceof Mesh)) return;

    getValues(([, options]: Props) => {
      if (i.geometry.uuid !== instance.uuid) i.geometry = instance;
      Object.assign(i.geometry, options);
    });
  });
};

export default geometry;
