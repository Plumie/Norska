import { NorskaDirective } from "@/types/Norska";

type Three = "scene" | "camera" | "renderer";

const three: NorskaDirective = (
  el,
  { modifiers }
) => {
  el._norska = window._norska[modifiers[1] as Three]; 
};

export default three;
