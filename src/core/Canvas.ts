import * as THREE from "three";
import AlpineInstance from "alpinejs";

export default (Alpine: typeof AlpineInstance) => {
  Alpine.directive('canvas', (el, {expression}) => {

    // Create a new Three.js scene

    const {scene, camera, renderer} = window.Norska = {
      scene: new THREE.Scene(),
      camera: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
      renderer: new THREE.WebGLRenderer(),
    }

    // Create a full width/height canvas

    const parent = document.createElement('div');
    parent.style.width = '100%';
    parent.style.height = '100%';
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
      renderer.render(scene, camera);
    };

    animate();
  })
}
