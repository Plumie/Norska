import { ElementWithXAttributes, DirectiveData, DirectiveUtilities, Alpine } from 'alpinejs';

export type Instance<T = Record<string, any>> = T & {
  el?: HTMLElement;
};

export type NorskaAddons = {
  prefix: string;
  directives?: Record<string, NorskaDirectiveCallback>;
  magics?: Record<string, NorskaMagicProperty>
}

export type NorskaOptions = {
  namespace?: string;
  loaders?: any[];
  addons?: NorskaAddons[];
};

export type ElementWithNorskaAttributes = ElementWithXAttributes & {_norska?: Instance};

export type NorskaDirectiveCallback = {
  (el: ElementWithNorskaAttributes, directive: DirectiveData, utilities: DirectiveUtilities): void;
  inline?: (el: ElementWithNorskaAttributes, directive: DirectiveData, utilities: DirectiveUtilities) => void;
}

export type NorskaMagicProperty = (Alpine: Alpine, ...args: any[]) => void;
