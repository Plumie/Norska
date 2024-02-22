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
    const {i} = el._norska;

    getValues(([, options]: Props) => {
      if (!i) {
        Object.assign(instance, options);     
        scene.add(instance);
        el._norska.i = instance;
        return;
      }
      if (i instanceof Light) {
        Object.assign(i, options);
      }
    });
  });
};

export default light;
