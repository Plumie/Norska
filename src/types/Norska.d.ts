import {Material, Mesh, Light} from 'three';

type NorskaOptions = {
  prefix: string;
}

type NorskaElement = HTMLElement & {
    _norska: {
      mesh?: Mesh & {material: Material};
      light?: Light;
    }
}
