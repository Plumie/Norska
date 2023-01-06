import {Mesh} from "three";
import {NorskaElement} from "../types/Norska";
import AlpineInstance from "alpinejs";

export default (Alpine: typeof AlpineInstance) => {
  Alpine.directive('mesh', (el, {expression}, {effect}) => {
    const {scene} = window.Norska;

    (effect as any)(() => {
      (el as NorskaElement)._norska.mesh = new Mesh();
      scene.add((el as NorskaElement)._norska.mesh);
    });
  });
}
