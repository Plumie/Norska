import { AlpineDirective } from "@/types/Alpine";

type Props = [any[], Record<string, any>];

const light: AlpineDirective = (
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
      } else {
        Object.assign(light, options);
      }
    });
  });
};

export default light;
