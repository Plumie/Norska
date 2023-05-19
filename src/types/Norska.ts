import { Mesh, Light, Material } from 'three';
import { Alpine } from './Alpine';

export type Norska = (o: Record<string, unknown>) => (Alpine: Alpine) => void;

export interface NorskaOptions {
  prefix?: string;
};

export interface NorskaElement extends HTMLElement {
  _norska: {
    mesh?: Mesh & { material: Material },
    light?: Light,
  };
  parentNode: NorskaElement;
};

export interface NorskaWindow extends Window {
	Norska: any;
}
