import { Alpine } from 'alpinejs';

export {};

declare global {
  interface Window {
    Alpine: Alpine;
    Norska: Record<string, any>;
  }

  type AlpineDirective = (
    el: NorskaElement,
    args: any,
    routine: any,
    instance: any
  ) => void;

  type AlpineMagic = (arg0: string, arg1: (params) => void) => void;

  type Alpine = {
    directive: (prefix: string, AlpineDirective: AlpineDirective) => void;
    magic: AlpineMagic;
  };
}
