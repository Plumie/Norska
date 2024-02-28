import { ElementWithNorskaAttributes, NorskaDirectiveCallback } from '@/types/norska.types';
import { Camera, PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { isObject } from '@/utils/guards';
import { createEventManager } from '@/directives/canvas/events';

type Parameters = {
  scene?: Scene | Record<string, unknown>;
  camera?: Camera | Record<string, unknown>;
  renderer?: WebGLRenderer | Record<string, unknown>;
  shadow?: boolean;
}

const canvas: NorskaDirectiveCallback = (
  el,
  { expression },
  { effect, evaluateLater },
) => {
  const getValues = evaluateLater<Parameters>(expression.length ? expression : 'false');

  const getRenderer = (parameters?: Parameters['renderer']) => {
    if (parameters instanceof WebGLRenderer) return parameters; 
    const renderer = new WebGLRenderer(); 
    if (isObject(parameters)) Object.assign(renderer, parameters);
    return renderer;
  }

  const getCamera = (parameters?: Parameters['camera']) => {
    if (parameters instanceof Camera) return parameters;
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    if (isObject(parameters)) Object.assign(camera, parameters);
    return camera;
  }

  const getScene = (parameters?: Parameters['scene']) => {
    if (parameters instanceof Scene) return parameters;
    const scene = new Scene();
    if (isObject(parameters)) Object.assign(scene, parameters);
    return scene;
  }

  const createNorskaProperties = () => {
    ([...el.querySelectorAll('*')] as ElementWithNorskaAttributes[]).forEach((child) => {
      child._norska = undefined;
    });
  }

  const createParent = () => {
    const parent = document.createElement('div')
    parent.style.setProperty('width', '100%');
    parent.style.setProperty('heigth', '100%');
    el.parentNode?.appendChild(parent);
    parent.appendChild(window._norska.renderer.domElement);
    return parent;
  }

  const setCanvasSize = (parent: HTMLElement) => {
    const { width, height } = parent.getBoundingClientRect(); 
    window._norska.camera.aspect = width / height;
    window._norska.camera.updateProjectionMatrix();
    window._norska.renderer.setSize(width, height);
  };

  const createViewportManager = () => {
    const parent = createParent();
    setCanvasSize(parent);
    window.addEventListener('resize', () => setCanvasSize(parent));
    el.style.display = 'none';
  }

  const animate = () => {
    const {camera, renderer, scene, controls} = window._norska;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    if (controls) controls.update();
  };

  effect(() => {
    getValues((parameters) => {
      window._norska = {
        scene: getScene(parameters.scene),
        camera: getCamera(parameters.camera),
        renderer: getRenderer(parameters.renderer),
      };

      createViewportManager();
      createEventManager();
      createNorskaProperties();

      animate();
    })
  })
};

export default canvas;
