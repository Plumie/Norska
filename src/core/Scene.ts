import Alpine from "alpinejs";
import * as THREE from "three";
import {Color, ColorRepresentation, Texture} from "three";

type Props = {
  background: ColorRepresentation | Texture;
}

Alpine.directive('scene', (el, {expression}, {evaluateLater, effect}) => {
  const {scene} = window.Norska;
  const getValues = evaluateLater(expression);

  (effect as any)(() => {
    getValues(({background}: Props) => {
      if (background) {
        if (background instanceof Color) scene.background.set(background)
        if (background instanceof Texture) scene.background = background;
        else scene.background = new Color(background)
      }
    });
  });
});