import lights from './index';

type Props = [string, any[], Record<string, any>] | [];

const Light: AlpineDirective = (
  el,
  { expression, modifiers },
  { evaluateLater, effect }
) => {
  const { scene } = window.Norska;

  const createLight = () => {
    let props: Props = ['ambientLight', [], {}];

    if (expression) {
      const getValues = evaluateLater(expression);
      getValues((values: any) => {
        if (modifiers[1]) props = [`${modifiers[1]}Light`, values[0], values[1]];
        else props = values;
      }); 
    }
   
    if (modifiers[1]) props[0] = `${modifiers[1]}Light`;

    const [name, args, options] = props;

    el._norska.light = lights[name](args);
    Object.assign(el._norska.light, options);
    scene.add(el._norska.light);
  }

  const updateLight = () => {
    const getValues = evaluateLater(expression);
    getValues(([, , options]: Props) => {
      Object.assign(el._norska.light, options);
    });
  }

  effect(() => {
    const light = el._norska.light;
    if (light) {
      updateLight();
    } else {
      createLight();
    }
  });
};

export default Light;
