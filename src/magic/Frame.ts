import AlpineInstance from "alpinejs";
import { NorskaOptions } from "@/types/Norska";

export default (Alpine: typeof AlpineInstance, {prefix}: NorskaOptions) => {
  Alpine.magic(`${prefix}frame`, () => {
    return (callback: () => void) => {
      const e = () => {
        callback();
        requestAnimationFrame(e);
      };
      e();
    }
  })
}