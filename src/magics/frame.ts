import { Alpine } from "@/types/Alpine";

export default (Alpine: Alpine) => {
  Alpine.magic('frame', () => {
    return (callback: () => void) => {
      const e = () => {
        callback();
        requestAnimationFrame(e);
      };
      e();
    };
  });
};
