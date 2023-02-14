import {Material, Mesh, Light} from 'three';

type NorskaElement = HTMLElement & {
    _norska: {
      mesh?: Mesh & {material: Material};
      light?: Light;
    }
}
