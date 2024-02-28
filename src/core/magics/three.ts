import { Alpine } from 'alpinejs';
import * as THREE from 'three';

export default (Alpine: Alpine) => {
  Alpine.magic('3', () => THREE);
  Alpine.magic('three', () => window._norska);
};
