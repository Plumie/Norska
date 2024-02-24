import { Alpine } from 'alpinejs';
import * as THREE from 'three';

export default (Alpine: Alpine) => {
  Alpine.magic('3', () => THREE);
  Alpine.magic('math', () => THREE.MathUtils);
};
