import * as THREE from 'three';

import Alpine from 'alpinejs'

Alpine.directive('canvas', (el) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  el.appendChild(renderer.domElement);

  camera.position.z = 5;

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  animate();

  window.Norska = {
    scene,
  }
});

Alpine.directive('box', (el, {expression}, {evaluateLater, effect}) => {
  const {scene} = window.Norska;
  const getValues = evaluateLater(expression);

  effect(() => {
    getValues(({args, material}) => {
      if (el.id) {
        scene.traverse((child) => {
          if (child.uuid === el.id) {
            child.material = new THREE.MeshBasicMaterial(material);
          }
        });
      } else {
        const params = [
          new THREE.BoxGeometry(...args),
          new THREE.MeshBasicMaterial(material)
        ];
        const mesh = new THREE.Mesh(...params);
        el.id = mesh.uuid;
        scene.add(mesh);
      }
    });
  });
});

window.Alpine = Alpine
Alpine.start()
