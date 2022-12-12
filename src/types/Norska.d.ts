import {Material, Mesh, Light} from 'three';

type NorskaElement = HTMLElement & {
    __norska: {
      mesh?: Mesh & {material: Material};
      light?: Light;
    }
}