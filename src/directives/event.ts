import { NorskaDirective } from "@/types/Norska";

const event: NorskaDirective = (
  el,
  { expression, modifiers },
  { evaluate }
) => {
  if (el._norska.events === undefined) el._norska.events = {};
  el._norska.events[modifiers[1]] = () => evaluate(expression);
};

export default event;
