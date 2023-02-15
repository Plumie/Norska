import geometries from './index';
import { NorskaElement, NorskaOptions } from '@/types/Norska';

type Props = [
  string,
  number[],
  {
    [key: string]: any;
  }
];

export default (Alpine: Alpine, { prefix }: NorskaOptions) => {
  Alpine.directive(
    `${prefix}geometry`,
    (el, { expression }, { evaluateLater, effect }) => {
      const getValues = evaluateLater(expression);

      (effect as any)(() => {
        const { mesh } = (el as NorskaElement)._norska;

        if (mesh) {
          // If the geometry has not been updated yet, we create a new one

          if (!mesh.geometry.userData.updated) {
            getValues(([primitive, args, options]: Props) => {
              mesh.geometry = geometries[primitive](args);
              Object.assign(mesh.geometry, options);
              mesh.geometry.userData.updated = true;
            });
          } else {
            // If the geometry has already been updated, we update the existing one

            getValues(([, , options]: Props) => {
              Object.assign(mesh.geometry, options);
            });
          }
        } else {
          throw new Error(
            'You must define a mesh with x-mesh before defining a geometry'
          );
        }
      });
    }
  );
};
