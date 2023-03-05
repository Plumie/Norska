type Props = [any[], Record<string, any>];

const geometry: AlpineDirective = (
  el,
  { expression },
  { evaluateLater, effect },
  instance
) => {
  const getValues = evaluateLater(expression);

  effect(() => {
    const {mesh} = el._norska;

    if (mesh) {
      getValues(([, options]: Props) => {
        if (mesh.geometry.uuid !== instance.uuid) mesh.geometry = instance;
        Object.assign(mesh.geometry, options);
      });
    }
  });
};

export default geometry;
