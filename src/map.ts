import core from '@/core';
import primitives from '@/primitives';
import magics from '@/magics';
import { Alpine } from 'alpinejs';
import { NorskaDirective } from '@/types/Norska';

const directives: Record<string, Record<string, NorskaDirective>> = {
  core,
  primitives
};

const magicProperties: Record<string, (Alpine: Alpine) => void> = {
  ...magics
};

export {
  directives,
  magicProperties
};
