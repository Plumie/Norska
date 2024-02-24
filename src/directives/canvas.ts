import { NorskaDirective, NorskaElement } from '@/types/Norska';
import { Camera, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

const canvas: NorskaDirective = (
  el,
  { expression },
  { evaluate },
) => {

  const parameters: any = expression ? evaluate(expression) : {};

  const getRenderer = () => {
    if (parameters.renderer instanceof WebGLRenderer) return parameters.renderer; // Custom renderer
    // Default renderer
    const renderer = new WebGLRenderer(); 
    if (parameters.renderer?.constructor.name === 'Object') Object.assign(renderer, parameters.renderer);
    return renderer;
  }

  const getCamera = () => {
    if (parameters.camera instanceof Camera) return parameters.camera; // Custom camera
    // Default camera
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    if (parameters.camera?.constructor.name === 'Object') Object.assign(camera, parameters.camera);
    return camera;
  }

  const getScene = () => {
    if (parameters.scene instanceof Scene) return parameters.scene; // Custom scene
    // Default scene
    const scene = new Scene();
    if (parameters.scene?.constructor.name === 'Object') Object.assign(scene, parameters.scene);
    return scene;
  }

  const {scene, camera, renderer} = {
    scene: getScene(),
    renderer: getRenderer(),
    camera: getCamera()
  }

  
  const createParent = () => {
    const parent = document.createElement('div');
    parent.style.width = '100%';
    parent.style.height = '100%';

    [...el.querySelectorAll('*')].forEach((child) => {
      (child as NorskaElement)._norska = null;
    });

    el.parentNode?.appendChild(parent);

    return parent;
  }

  const parent = createParent();
  parent.appendChild(renderer.domElement);

  const getParentSize = () => {
    const { width, height } = parent.getBoundingClientRect();
    return { width, height };
  };

  const setCanvasSize = () => {
    const { width, height } = getParentSize();
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  // Hide the architechture
  (el as unknown as HTMLDivElement).style.display = 'none';

  setCanvasSize();
  window.addEventListener('resize', setCanvasSize);

  animate();

  window._norska = {
    scene,
    camera,
    renderer,
  };
};

export default canvas;
