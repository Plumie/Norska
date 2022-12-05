import {Geometry} from './objects';

const norska: Record<string, any> = {
  geometry: Geometry,
}

export default function (Alpine: any) {
  Object.keys(norska).forEach((name) => {
    Alpine.directive(name, norska[name](Alpine));
  });
}
