import { Alpine } from 'alpinejs';

export {};

declare global {
  interface Window {
    Alpine: Alpine;
    Norska: Record<string, any>;
  }

  type Alpine = {
    directive: (
      arg0: string,
      arg1: (el: NorskaElement, binding: any, { effect, cleanup }: any) => void
    ) => void;
    magic: (arg0: string, arg1: (params) => void) => void;
  };
}
