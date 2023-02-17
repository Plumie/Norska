import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import { ArcballControls } from 'three/examples/jsm/controls/ArcballControls';

type Props = [string, number[], Record<string, any>];

const Controls: Record<string, any> = {
  OrbitControls,
  DragControls,
  FirstPersonControls,
  FlyControls,
  PointerLockControls,
  TrackballControls,
  TransformControls
};

export default (Alpine: Alpine) => {
  Alpine.directive(
    'controls',
    (el, { expression }, { evaluateLater, effect }) => {
      let { renderer, camera, scene, controls } = window.Norska;
      const getValues = evaluateLater(expression);

      effect(() => {
        getValues(([name, options]: Props) => {
          if (!controls) {
            controls = new Controls[name](
              camera,
              renderer.domElement,
              Controls.Camera instanceof ArcballControls ?? scene
            );
            controls.update();
          } else {
            controls = Object.assign(controls, options);
          }
        });
      });
    }
  );
};
