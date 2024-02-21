import { Alpine, AlpineDirective } from '@/types/Alpine';
import core from '@/core';
import primitives from '@/primitives';
import magics from '@/magics';

const directives: Record<string, Record<string, AlpineDirective>> = {
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
