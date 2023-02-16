import { NorskaOptions } from '@/types/Norska';
import * as THREE from 'three';

export default (Alpine: Alpine, { prefix }: NorskaOptions) => {
  Alpine.magic(`${prefix}three`, () => {
    return THREE;
  });
};
