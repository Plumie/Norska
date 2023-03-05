type Props = [Record<string, any>];

const material: AlpineDirective = (
  el,
  { expression },
  { evaluateLater, effect },
  instance
) => {
  const getValues = evaluateLater(expression);

  effect(() => {
    const mesh = el._norska.mesh;
    if (mesh) {
      if (mesh?.material.uuid === instance.uuid) {
        getValues(([{ color, ...rest }]: Props) => {
          if (color) mesh.material.color.set(color);
          Object.assign(mesh.material, rest);
        });
      } else {
        mesh.material = instance;
        mesh.material.userData.updated = true;
      }
    }
  });
};

export default material;
