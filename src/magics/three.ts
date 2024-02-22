import { Alpine } from 'alpinejs';
import * as THREE from 'three';

export default (Alpine: Alpine) => {
  Alpine.magic('three', () => THREE);
  Alpine.magic('3', () => window.Norska);
};
