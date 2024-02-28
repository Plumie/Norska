import { NorskaDirectiveCallback } from "@/types/norska";

const three: NorskaDirectiveCallback = (
  el,
  { modifiers },
  { effect, cleanup }
) => {
  effect(() => {
    const instance = window._norska[modifiers[1]];
    if (!instance) throw new Error(`Three: no global state property found for ${modifiers[1]}`);
    el._norska = instance; 
  })

  cleanup(() => {
    el._norska = undefined;
  })
};

export default three;
