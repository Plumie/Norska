
type Props = [
  string,
  number[],
  {
    [key: string]: any;
  }
];

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
      if (!mesh?.geometry.userData.updated) {
        mesh.geometry = instance;
        mesh.geometry.userData.updated = true;
      } else {
        getValues(([, options]: Props) => {
          Object.assign(mesh.geometry, options);
        });
      }
    }
  });
};

export default geometry;
