import { Alpine } from '@/types/Alpine';
import * as THREE from 'three';

export default (Alpine: Alpine) => {
  Alpine.magic('three', () => {
    return THREE;
  });
};
