import {Material, Mesh} from 'three';

type NorskaElement = HTMLElement & {
    __norska: {
      mesh?: Mesh & {material: Material};
    }
}