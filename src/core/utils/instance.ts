import { ElementWithNorskaAttributes, Instance } from "@/types/norska";
import { Object3D } from "three";
import { isObject3D } from "@/utils/guards";

export const getInstance = (el: ElementWithNorskaAttributes): Instance | undefined => el._norska;

export const getParentInstance = (el: ElementWithNorskaAttributes): Instance | undefined => (el.parentNode as ElementWithNorskaAttributes)?._norska;

export const attachInstance = (el: ElementWithNorskaAttributes, instance: Instance) => {
  el._norska = instance;
  el._norska.el = el;
}

export const detachInstance = (el: ElementWithNorskaAttributes) => {
  el._norska = undefined;
}

export const addInstance = (el: ElementWithNorskaAttributes, instance: Instance<Object3D>) => {
  const parentInstance = getParentInstance(el);
  if (isObject3D(parentInstance)) {
    parentInstance.add(instance);
    return;
  }
  window._norska.scene.add(instance);
}

export const removeInstance = (el: ElementWithNorskaAttributes, instance: Instance<Object3D>) => {
  const parentInstance = getParentInstance(el);
  if (isObject3D(parentInstance)) {
    parentInstance.remove(instance);
    return;
  }
  window._norska.scene.remove(instance);
} 
