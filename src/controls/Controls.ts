import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';

type Props = [string, number[], Record<string, any>];

const o: Record<string, any> = {
  OrbitControls,
  DragControls,
  FirstPersonControls,
  FlyControls,
  PointerLockControls,
  TrackballControls,
  TransformControls
};

const Controls: AlpineDirective = (
  el,
  { expression },
  { evaluateLater, effect }
) => {
  let { renderer, camera, controls } = window.Norska;
  const getValues = evaluateLater(expression);

  effect(() => {
    getValues(([name, options]: Props) => {
      if (!controls) {
        controls = new o[name](camera, renderer.domElement);
        controls.update();
      } else {
        controls = Object.assign(controls, options);
      }
    });
  });
};

export default Controls;
