type Props = [any[], Record<string, any>];

const geometry: AlpineDirective = (
  el,
  { expression },
  { evaluateLater, effect },
  instance
) => {
  const getValues = evaluateLater(expression);

  effect(() => {
    const mesh = el._norska.mesh;
    if (mesh) {
      if (mesh?.geometry.uuid === instance.uuid) {
        getValues(([, options]: Props) => {
          Object.assign(mesh.geometry, options);
        });
      } else {
        mesh.geometry = instance;
        mesh.geometry.userData.updated = true;
      }
    }
  });
};

export default geometry;
