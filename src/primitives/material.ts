import { AlpineDirective } from "@/types/Alpine";

type Props = Record<string, any>;

const material: AlpineDirective = (
  el,
  { expression },
  { evaluateLater, effect },
  instance
) => {
  const getValues = evaluateLater(expression);

  effect(() => {
    const {mesh} = el._norska;
    if (mesh) {
      getValues(({ color, ...rest }: Props) => {
        if (mesh.material.uuid !== instance.uuid) mesh.material = instance;
        if (color) (mesh.material as any).color.set(color);
        Object.assign(mesh.material, rest);
      });
    }
  });
};

export default material;
