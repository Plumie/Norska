import { NorskaDirective } from "@/types/Norska";
import { MaterialParameters, Mesh } from "three";

type Props = Record<string, keyof MaterialParameters>;

const material: NorskaDirective = (
  el,
  { expression },
  { evaluateLater, effect },
  instance
) => {
  const getValues = evaluateLater(expression);
  effect(() => {
    const {i} = el._norska;
    if (i instanceof Mesh) {
      getValues(({ color, ...args }: Props) => {
        if (i.material.uuid !== instance.uuid) {
          i.material = instance;
        }
        if (color) {
          i.material.color.set(color);
        }
        Object.assign(i.material, args);
      });
    }
  });
};

export default material;
