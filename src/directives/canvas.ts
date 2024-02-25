import { NorskaDirective, NorskaElement } from '@/types/Norska';
import { Camera, PerspectiveCamera, Raycaster, Scene, Vector2, WebGLRenderer } from 'three';

const canvas: NorskaDirective = (
  el,
  { expression },
  { evaluate },
) => {

  const parameters: any = expression ? evaluate(expression) : {};

  // Return custom renderer or default renderer with optional parameters
  const getRenderer = () => {
    if (parameters.renderer instanceof WebGLRenderer) return parameters.renderer; 
    const renderer = new WebGLRenderer(); 
    if (parameters.renderer?.constructor.name === 'Object') Object.assign(renderer, parameters.renderer);
    return renderer;
  }

  // Return custom camera or default camera with optional parameters
  const getCamera = () => {
    if (parameters.camera instanceof Camera) return parameters.camera;
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    if (parameters.camera?.constructor.name === 'Object') Object.assign(camera, parameters.camera);
    return camera;
  }

  // Return custom scene or default scene with optional parameters
  const getScene = () => {
    if (parameters.scene instanceof Scene) return parameters.scene;
    const scene = new Scene();
    if (parameters.scene?.constructor.name === 'Object') Object.assign(scene, parameters.scene);
    return scene;
  }

  const {scene, camera, renderer, raycaster, pointer} = {
    scene: getScene(),
    renderer: getRenderer(),
    camera: getCamera(),
    raycaster: new Raycaster(),
    pointer: new Vector2()
  }

  // Create a parent div to hold the renderer
  const createParent = () => {
    const parent = document.createElement('div');
    parent.style.width = '100%';
    parent.style.height = '100%';

    [...el.querySelectorAll('*')].forEach((child) => {
      (child as NorskaElement)._norska = null;
    });

    el.parentNode?.appendChild(parent);

    parent.appendChild(renderer.domElement);

    return parent;
  }

  const parent = createParent();

  const setCanvasSize = () => {
    const { width, height } = parent.getBoundingClientRect(); 
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };

  let intersects: any[] = [];

  const onPointerMove = (event: PointerEvent) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(pointer, camera);
    intersects = raycaster.intersectObjects(scene.children);

    // change cursor depending on if an object is intersected
    document.body.style.cursor = intersects.length ? 'pointer' : 'auto';
  }

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  (el as unknown as HTMLDivElement).style.display = 'none';

  setCanvasSize();

  window.addEventListener('resize', setCanvasSize);

  animate();

  window._norska = {
    scene,
    camera,
    renderer,
  };

  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('click', (e) => {
    if (!intersects[0]) return;
    const object = intersects[0].object;
    object.el.dispatchEvent(new CustomEvent('click', { detail: e }));
  });
};

export default canvas;
