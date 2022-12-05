import {Mesh} from "three";
import {MeshNode} from "../types/Norska";
import AlpineInstance from "alpinejs";

const _Mesh = (Alpine: typeof AlpineInstance) => {
  Alpine.directive('mesh', (el, {expression}, {effect}) => {
    const {scene} = window.Norska;

    (effect as any)(() => {
      (el as MeshNode).mesh = new Mesh();
      scene.add((el as any).mesh);
    });
  });
}

export default _Mesh;
