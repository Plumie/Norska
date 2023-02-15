import {NorskaElement, NorskaOptions} from "@/types/Norska";
import AlpineInstance from "alpinejs";

type Props = [number, number, number]

export default (Alpine: typeof AlpineInstance, {prefix}: NorskaOptions) => {
  Alpine.directive(`${prefix}rotation`, (el, {expression}, {evaluateLater, effect}) => {
    const getValues = evaluateLater(expression);

    (effect as any)(() => {
      const {mesh, light} = (el as NorskaElement)._norska;
      getValues((args: Props) => {
        if (mesh) mesh.rotation.set(...args);
        if (light) light.rotation.set(...args);
      });
    });
  });
}
