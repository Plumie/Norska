import { NorskaMagicProperty } from '@/types/norska';
import three from '@/magics/three';
import frame from '@/magics/frame';
import i from '@/magics/i';
import load from '@/magics/load';
import loaders from '@/magics/loaders';
import math from '@/magics/math';

const magics: Record<string, NorskaMagicProperty> = {
  three,
  math,
  frame,
  i,
  load,
  loaders
};

export default magics;
