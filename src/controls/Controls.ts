import AlpineInstance from "alpinejs";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import camera from "../core/Camera";

type Props = [string, number[], Record<string, any>]

const types: Record<string, typeof OrbitControls> = {
  OrbitControls
}

export default (Alpine: typeof AlpineInstance) => {
  Alpine.directive('controls', (el, {expression}, {evaluateLater, effect}) => {
    let {renderer, camera, controls} = window.Norska;
    const getValues = evaluateLater(expression);

    (effect as any)(() => {
      getValues(([name, options]: Props) => {
        if(!controls) {
          controls = new types[name](camera, renderer.domElement);
          controls = Object.assign(controls, options);
          controls.update();
        } else {
          controls = Object.assign(controls, options);
        }
      });
    });
  });
}
