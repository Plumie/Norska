import { Color, ColorRepresentation, Texture } from 'three';
import { AlpineDirective } from '@/types/Alpine';

type Props = {
  background: ColorRepresentation | Texture;
};

const Scene: AlpineDirective = (
  el,
  { expression },
  { evaluateLater, effect }
) => {
  const { scene } = window.Norska;
  const getValues = evaluateLater(expression);

  effect(() => {
    getValues(({ background }: Props) => {
      if (background) {
        if (background instanceof Color) (scene.background as Color).set(background);
        if (background instanceof Texture) scene.background = background;
        else scene.background = new Color(background);
      }
    });
  });
};

export default Scene;
