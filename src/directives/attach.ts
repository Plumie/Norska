import { NorskaDirective } from '@/types/Norska';

// Drilling down into the parent object and attaching the current object
const attach: NorskaDirective = (
	el,
  { modifiers },
  { effect, cleanup },
) => {

  modifiers = modifiers.map((modifier: string) => {
    return modifier.replace(/-./g, (x) => x.charAt(1).toUpperCase());
  });

  const getSpecificProperty: any = () => {

    const parentInstance = el.parentNode?._norska;

    if (!el._norska || !parentInstance) return;

    let j = parentInstance;

    const properties = modifiers.slice(1);

    const last = properties[properties.length - 1];

    properties.forEach((property: string,) => {
      if (j[property] === undefined) throw new Error(`Property ${properties.join('.')} does not exist`);
      if (property === last) return;
      j = j[property];
    });

    return [j, last]
  }

  const attachToParent = () => {

    const data = getSpecificProperty();
    if (!data) return;
    
    const [object, key] = data;

    const i = el._norska;

    if (object[key]?.set) {
      object[key].copy(i);
      return; 
    }

    object[key] = i;
  };

  effect(() => {
    el.parentNode.addEventListener('norska:update', attachToParent);
    attachToParent();
  })

  cleanup(() => el.parentNode.removeEventListener('norska:update', attachToParent));
};

export default attach;
