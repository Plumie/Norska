import { NorskaDirective } from "@/types/Norska";
import { MaterialParameters } from "three";

type Props = Record<string, keyof MaterialParameters>;

const material: NorskaDirective = (
  el,
  { expression },
  { evaluateLater, effect },
  instance
) => {
  const getValues = evaluateLater(expression);
  effect(() => {
    const {mesh} = el._norska;
    if (mesh) {
      getValues(({ color, ...args }: Props) => {
        if (mesh.material.uuid !== instance.uuid) mesh.material = instance;
        if (color) mesh.material.color.set(color);
        Object.assign(mesh.material, args);
      });
    }
  });
};

export default material;
