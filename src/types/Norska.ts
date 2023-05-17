import { Mesh, Light, Material } from 'three';

export type Norska = (o: Record<string, any>) => (Alpine: any) => void;

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
