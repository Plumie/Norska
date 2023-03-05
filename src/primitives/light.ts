type Props = [any[], Record<string, any>];

const light: AlpineDirective = (
  el,
  { expression },
  { evaluateLater, effect },
  instance
) => {
  const { scene } = window.Norska;
  const getValues = expression ? evaluateLater(expression) : [];

  effect(() => {
    const light = el._norska.light;
    if (light) {
      getValues(([, options]: Props) => {
        Object.assign(light, options);
      });
    } else {
      scene.add(instance);
    }
  });
};

export default light;
