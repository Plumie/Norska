import { NorskaDirectiveCallback } from '@/types/norska';
import { attachInstance, detachInstance } from '@/utils/instance';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const orbitControls: NorskaDirectiveCallback = (
  el,
  { expression },
  { effect, cleanup, evaluateLater },
) => {
  const getValues = evaluateLater(expression.length ? expression : 'false');
  effect(() => {
    getValues((values) => {
      const {camera, renderer} = window._norska;
      const controls = new OrbitControls(camera, renderer.domElement);
      Object.assign(controls, values);
      attachInstance(el, controls);
      window._norska.controls = controls;
    });
  })

  cleanup(() => {
    detachInstance(el);
    window._norska.controls.dispose();
  });
};

export default orbitControls;
