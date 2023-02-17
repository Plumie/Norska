import { Color, ColorRepresentation, Texture } from 'three';

import { NorskaOptions } from '@/types/Norska';

type Props = {
  background: ColorRepresentation | Texture;
};

export default (Alpine: Alpine, { prefix }: NorskaOptions) => {
  Alpine.directive(
    `${prefix}scene`,
    (el, { expression }, { evaluateLater, effect }) => {
      const { scene } = window.Norska;
      const getValues = evaluateLater(expression);

      effect(() => {
        getValues(({ background }: Props) => {
          if (background) {
            if (background instanceof Color) scene.background.set(background);
            if (background instanceof Texture) scene.background = background;
            else scene.background = new Color(background);
          }
        });
      });
    }
  );
};
