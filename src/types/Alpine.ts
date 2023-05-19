import { NorskaElement } from '@/types/Norska';

type AlpineRoutine = (args: unknown) => any;

export type AlpineDirective = (
  el: NorskaElement,
  args: Record<string, any>,
  routine: {
		evaluateLater: AlpineRoutine;
		cleanup: AlpineRoutine;
		effect: AlpineRoutine;
		evaluate: AlpineRoutine;
	},
  instance?: InstanceType<any>
) => void;

export type AlpineMagic = (name: string, callback: (args: any) => unknown) => void;

export type Alpine = {
  directive: (prefix: string, AlpineDirective: AlpineDirective) => void;
  magic: AlpineMagic;
};
