import { NorskaElement } from '@/types/Norska';

export type AlpineDirective = (
  el: NorskaElement,
  args: any,
  routine?: any,
  instance?: any
) => void;

export type AlpineMagic = (arg0: string, arg1: (params: any) => any) => void;

export type Alpine = {
  directive: (prefix: string, AlpineDirective: AlpineDirective) => void;
  magic: AlpineMagic;
};
