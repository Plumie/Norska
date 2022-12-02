import Alpine from "alpinejs";
import * as THREE from "three";

type Props = [Record<string, any>, Record<string, any>]
type NkNode = Node & {uuid: string}

Alpine.directive('mesh', (el, {expression}, {evaluateLater, effect}) => {
  const {scene} = window.Norska;
  const getValues = evaluateLater(expression);

  (effect as any)(() => {
    getValues(([geometry, material]: Props) => {
      if ((el as NkNode).uuid) {
        const existingMesh = scene.getObjectByProperty('uuid', (el as NkNode).uuid);
        if(existingMesh) {
          if (material.parameters)
            existingMesh.material.setValues(material.parameters);
          if (geometry.parameters)
            existingMesh.geometry.setValues(geometry.parameters);
        }
      } else {
        const mesh = new THREE.Mesh(
          new (THREE as Record<string, any>)[geometry.type](...geometry.args),
          new (THREE as Record<string, any>)[material.type]({...material.parameters})
        );
        (el as NkNode).uuid = mesh.uuid;
        scene.add(mesh);
      }
    });
  });
});
