import { Mesh, Light, Material } from 'three';
import { Alpine } from './Alpine';

export type Norska = (o: Record<string, any>) => (Alpine: Alpine) => void;

export type NorskaOptions = {
  prefix?: string;
};

export type NorskaElement = HTMLElement & {
  _norska: {
    mesh?: Mesh & { material: Material },
    light?: Light,
  };
  parentNode: NorskaElement;
};

export interface NorskaWindow extends Window {
	Norska: any;
}
