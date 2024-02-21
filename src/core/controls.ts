import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import { NorskaDirective } from '@/types/Norska';

type Props = any[];

let controls: Record<string, any> = {
  OrbitControls,
  DragControls,
  FirstPersonControls,
  FlyControls,
  PointerLockControls,
  TrackballControls,
  TransformControls
};

Object.entries(controls).forEach(([name, Control]) => {
  const d: NorskaDirective = (_, { expression}, { evaluateLater, effect }) => {
    const getValues = evaluateLater(expression);

    effect(() => {
      getValues((values: Props) => {
        if (!window.Norska.controls) {
          if (Array.isArray(values[0])) {
            controls = new Control(...values[0]);
            Object.assign(controls, values[1]);
          }
          else controls = new Control(...values);
          window.Norska.controls = controls;
        } else {
          Object.assign(window.Norska.controls, values[1]);
        }
        window.Norska.controls.update();
      });
    });
  };
  controls[name] = d;
});

controls = Object.fromEntries(
  Object.entries(controls).map(([k, v]) => [k.toLowerCase(), v])
);


export default controls;
