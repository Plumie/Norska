import { NorskaDirectiveCallback } from '@/types/norska.types';
import { attachInstance, detachInstance } from '@/utils/instance';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const orbitControls: NorskaDirectiveCallback = (
  el,
  {},
  { effect, cleanup },
) => {
  effect(() => {
    const {camera, renderer} = window._norska;
    const controls = new OrbitControls(camera, renderer.domElement);
    attachInstance(el, controls);
    window._norska.controls = controls;
  })

  cleanup(() => {
    detachInstance(el);
    window._norska.controls.dispose();
  });
};

export default orbitControls;
