import Alpine from "alpinejs";
import * as THREE from "three";

Alpine.directive('mesh', (el, {expression}, {evaluateLater, effect}) => {
  const {scene} = window.Norska;
  const getValues = evaluateLater(expression);

  effect(() => {
    getValues(([geometry, material]) => {
      if (el.uuid) {
        const existingMesh = scene.getObjectByProperty('uuid', el.uuid);
        if(existingMesh) {
          if (material.parameters)
            existingMesh.material.setValues(material.parameters);
          if (geometry.parameters)
            existingMesh.geometry.setValues(geometry.parameters);
        }
      } else {
        const mesh = new THREE.Mesh(
          new THREE[geometry.type](...geometry.args),
          new THREE[material.type]({...material.parameters})
        );
        el.uuid = mesh.uuid;
        scene.add(mesh);
      }
    });
  });
});