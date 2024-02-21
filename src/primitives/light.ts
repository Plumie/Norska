import { NorskaDirective } from "@/types/Norska";
import { Light } from "three";

type Props = ConstructorParameters<typeof Light>;

const light: NorskaDirective = (
  el,
  { expression },
  { evaluateLater, effect },
  instance
) => {
  const { scene } = window.Norska;
  const getValues = expression ? evaluateLater(expression) : [];

  effect(() => {
    const {light} = el._norska;

    getValues(([, options]: Props) => {
      if (!light) {
        Object.assign(instance, options);     
        scene.add(instance);
        el._norska.light = instance;
        return;
      }
      Object.assign(light, options);
    });
  });
};

export default light;
