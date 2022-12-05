import * as THREE from "three";
import AlpineInstance from "alpinejs";

export default (Alpine: typeof AlpineInstance) => {
  Alpine.directive('canvas', (el, {expression}) => {
    const {scene, camera, renderer} = window.Norska = {
      scene: new THREE.Scene(),
      camera: new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000),
      renderer: new THREE.WebGLRenderer(),
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    el.appendChild(renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();
  })
}
