import lights from "./index";
import {NorskaElement} from "../types/Norska";
import AlpineInstance from "alpinejs";

type Props = [string, any[], Record<string, any>]

export default (Alpine: typeof AlpineInstance) => {
  Alpine.directive('light', (el,  {expression}, {evaluateLater, effect}) => {
    const getValues = evaluateLater(expression);
    const {scene} = window.Norska;

    (effect as any)(() => {
      const light = (el as NorskaElement)._norska.light;
      if (light) {
        getValues(([,,options]: Props) => {
          Object.assign(light, options);
        });
      } else {
        getValues(([name, args, options]: Props) => {
          (el as NorskaElement)._norska.light = new lights[name](args);
          Object.assign((el as any)._norska.light, options);
          scene.add((el as NorskaElement)._norska.light);
        });
      }
    });
  });
}

