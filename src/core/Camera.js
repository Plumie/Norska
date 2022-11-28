import Alpine from "alpinejs";

Alpine.directive('camera', (el, {expression}, {evaluateLater, effect}) => {
  const {camera} = window.Norska;
  const getValues = evaluateLater(expression);

  effect(() => {
    getValues((params => {
      params.position && camera.position.set(...params.position);
      params.rotation && camera.rotation.set(...params.rotation);
      params.lookAt && camera.lookAt(...params.lookAt);
    }));
  });
});
