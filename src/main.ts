import { Frame, N, Three } from '@/magic';
import * as THREE from 'three';

const lowerCaseTHREE = Object.fromEntries(
  Object.entries(THREE).map(([k, v]) => [k.toLowerCase(), v])
);

const magics: Record<string, any> = {
  frame: Frame,
  n: N,
  Three: Three
};

export default (o: Record<string, any>) => {
  return (Alpine: any) => {
    const options = {
      prefix: '3',
      ...o
    };

    (Alpine as Alpine).directive(
      options.prefix,
      (el, { value, modifiers, expression }, { evaluate, effect, cleanup }) => {

        const values = evaluate(expression);
        console.log(values);

        try {
          const instance = new (lowerCaseTHREE as any)[modifiers[0]](...values); 
          console.log(instance);
        } catch (e) {
          console.error(`${modifiers[0]}: Invalid THREE.js object`);
        }
      }
    );

    Object.keys(magics).forEach((name) => {
      magics[name](Alpine, options);
    });
  };
};
