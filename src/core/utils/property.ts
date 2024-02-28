import { Instance } from "@/types/norska.types";
import { DirectiveData } from "alpinejs";

export const getPath = (modifiers: DirectiveData['modifiers']) => modifiers.map((modifier: string) => modifier.replace(/-./g, (match) => match.charAt(1).toUpperCase()));

export const getDeepProperty = (instance: Instance, path: string[]): [Instance, string] => {
  const lastKey = path[path.length - 1];
  let copy = instance;
  path.forEach((key: string,) => {
    if (copy[key] === undefined) throw new Error(`Property: ${path.join('.')} does not exist`);
    if (key === lastKey) return;
    copy = copy[key];
  });
  return [copy, lastKey];
}
