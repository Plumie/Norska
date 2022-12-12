import {Scene, PerspectiveCamera, WebGLRenderer, AmbientLight, PointLight} from "three";
import AlpineInstance from "alpinejs";
import {NorskaElement} from "../types/Norska";

export default (Alpine: typeof AlpineInstance) => {
  Alpine.directive('canvas', (el) => {

    // Create a new Three.js scene

    const {scene, camera, renderer} = window.Norska = {
      scene: new Scene(),
      camera: new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
      renderer: new WebGLRenderer(),
      controls: null
    }

    // Create a full width/height canvas

    const parent = document.createElement('div');
    parent.style.width = '100%';
    parent.style.height = '100%';

    [...(el as HTMLDivElement).querySelectorAll('*')].forEach((child) => {
      (child as NorskaElement).__norska = {}
    });

    (el as HTMLDivElement).insertAdjacentElement('beforebegin', parent);

    const getParentSize = () => {
      const {width, height} = parent.getBoundingClientRect();
      return {width, height};
    }

    const setCanvasSize = () => {
      const {width, height} = getParentSize();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize( width, height );
    }

    window.addEventListener( 'resize', setCanvasSize);
    parent.appendChild(renderer.domElement);

    (el as HTMLDivElement).style.display = 'none';

    setCanvasSize();

    // Start the animation loop

    const animate = () => {
      requestAnimationFrame(animate);

      if (window.Norska.controls) {
        window.Norska.controls.update();
      }

      renderer.render(scene, camera);
    };

    animate();
  })
}
