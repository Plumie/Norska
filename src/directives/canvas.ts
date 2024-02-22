import { NorskaDirective, NorskaElement } from '@/types/Norska';
import { Scene, PerspectiveCamera, WebGLRenderer } from 'three';

const canvas: NorskaDirective = (el) => {

  const { scene, camera, renderer } = (window.Norska = {
    scene: new Scene(),
    camera: new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    ),
    renderer: new WebGLRenderer(),
    controls: null
  });

  const parent = document.createElement('div');
  parent.style.width = '100%';
  parent.style.height = '100%';

  [...el.querySelectorAll('*')].forEach((child) => {
    (child as NorskaElement)._norska = null;
  });

  el.parentNode?.appendChild(parent);

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

  window.addEventListener('resize', setCanvasSize);
  parent.appendChild(renderer.domElement);

  (el as unknown as HTMLDivElement).style.display = 'none';

  setCanvasSize();

  const animate = () => {
    requestAnimationFrame(animate);

    if (window.Norska.controls) {
      window.Norska.controls.update();
    }

    renderer.render(scene, camera);
  };

  animate();
};

export default canvas;
