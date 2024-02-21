import { Scene, Camera, Renderer, Object3D } from 'three';
import { ElementWithXAttributes, Alpine } from 'alpinejs';

export type Norska = (o: Record<string, unknown>) => (Alpine: Alpine) => void;

export type NorskaDirective = (
  el: any,
  args: Record<string, any>,
  routine: Record<string, any>,
  instance?: InstanceType<any>
) => void;

export interface NorskaOptions {
  prefix?: string;
};

export interface NorskaElement extends ElementWithXAttributes {
  _norska: Object3D | {};
  parentNode: NorskaElement;
};

export interface NorskaWindow extends Window {
	Norska: {
		scene: Scene;
		camera: Camera;
		renderer: Renderer;
		controls: any;
	};
}
