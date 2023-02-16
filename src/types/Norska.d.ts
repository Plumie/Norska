import { Material, Mesh, Light } from 'three';

type Norska = (o: Record<string, any>) => (Alpine: any) => void;

type NorskaOptions = {
  prefix: string;
};

type NorskaElement = HTMLElement & {
  _norska: {
    mesh?: Mesh & { material: Material };
    light?: Light;
  };
};
